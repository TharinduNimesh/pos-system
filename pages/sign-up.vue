<script setup lang="ts">
import { SignUpSchema, type SignUpSchemaType } from "~/schema";
import type { FormSubmitEvent } from "#ui/types";
import type { CoreResponse, SignUpFormType } from "~/types";

enum BusinessType {
  StockBased = "StockBased",
  ServiceBased = "ServiceBased",
}

interface CalculateCostResponse {
  costForBranches: number;
  costForEmployees: number;
  totalCost: number;
}

interface IsExistsResponse extends CoreResponse {
  isExists: boolean;
}

const supabase = useSupabase();
const config = useRuntimeConfig();
const toast = useToast();
const isLoading = ref<boolean>(false);
const isFocusLeavedOrSubmitted = ref<boolean>(false);
const isUniqueNameTaken = ref<boolean>(false);
const color = useColorMode();
const state = ref<SignUpFormType>({
  name: undefined,
  nic: undefined,
  mobile: undefined,
  email: undefined,
  business_name: undefined,
  business_id: undefined,
  total_branches: 1,
  total_employees: 1,
  business_type: undefined,
  business_category: undefined,
});

const { data: businessTypes } = await supabase
  .from("business_category")
  .select("id, name, business_type")
  .order("name", { ascending: true });

businessTypes?.push({ id: 999, name: "Other", business_type: "ServiceBased" }); // set other as a business type

color.preference = "light";

const errorOnBussinessId = computed(() => {
  if (isFocusLeavedOrSubmitted.value) {
    if (state.value.business_id === undefined || state.value.business_id === "")
      return true;
    if (!/^[a-zA-Z0-9]+$/.test(state.value.business_id)) return true;
  }

  return isUniqueNameTaken.value;
});

const errorMessage = computed(() => {
  if (!errorOnBussinessId.value) return "";
  /^[a-zA-Z0-9]+$/;

  if (state.value.business_id === undefined || state.value.business_id === "")
    return "Business ID is required";

  if (!/^[a-zA-Z0-9]+$/.test(state.value.business_id))
    return "Business ID should contain only letters and numbers";

  if (isUniqueNameTaken.value) return "This name is already taken";
});

watch(
  () => state.value.business_id,
  async (business_id) => {
    const { data: businessUniquename } = await supabase
      .from("business")
      .select("uniquename")
      .eq("uniquename", `${business_id}`)
      .maybeSingle();

    if (businessUniquename === null) {
      isUniqueNameTaken.value = false;
    } else {
      isUniqueNameTaken.value = true;
    }
  }
);

async function onSubmit(event: FormSubmitEvent<SignUpSchemaType>) {
  const data = event.data;
  if (errorOnBussinessId.value) {
    toast.add({
      title: "Error",
      description: errorMessage.value,
      color: "red",
    });
    return;
  }
  if (!checkBusinessCategory(data)) {
    return;
  }

  isLoading.value = true;

  try {
    const userId = await createUserProfile(data);

    if (userId === null) {
      toast.add({
        title: "Error",
        description: "Failed to create user",
        color: "red",
      });
      isLoading.value = false;
      return;
    }

    const businessId = await createBusiness(data, userId);

    if (businessId === null) {
      toast.add({
        title: "Error",
        description: "Failed to create business",
        color: "red",
      });

      // delete the user if business creation failed
      await supabase.from("profile").delete().eq("id", userId);
      isLoading.value = false;
      return;
    }

    // update the user profile with the business id
    await supabase
      .from("profile")
      .update({ business_id: businessId })
      .eq("id", userId);

    await sendRequestAccessMail(data, businessId);
    isLoading.value = false;
    toast.add({
      title: "Success",
      description: "Your request has been submitted successfully",
      color: "green",
    });
  } catch (error) {
    toast.add({
      title: "Error",
      description: "Something went wrong while requesting access",
      color: "red",
    });

    isLoading.value = false;
    return;
  }

  isLoading.value = false;
}

async function sendRequestAccessMail(
  data: SignUpSchemaType,
  businessId: number
) {
  const { data: costResponse } =
    await supabase.functions.invoke<CalculateCostResponse>("calculate-cost", {
      method: "POST",
      body: JSON.stringify({
        branches: data.total_branches,
        employees: data.total_employees,
      }),
    });

  if (costResponse === null) {
    return;
  }

  await supabase.functions.invoke<CalculateCostResponse>("mail-sender", {
    method: "POST",
    body: {
      to: "tharindunimesh.abc@gmail.com",
      subject: "New Access Request | Everstock POS System",
      template:
        "https://omfhkajlvchmutqikdag.supabase.co/storage/v1/object/public/email-templates/access-request.html",
      options: {
        owner_name: data.name,
        business_name: data.business_name,
        mobile: data.mobile,
        employees: data.total_employees,
        branches: data.total_branches,
        cost: costResponse.totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "LKR",
        }),
        link: `https://supabase.com/dashboard/project/omfhkajlvchmutqikdag/editor/29316?schema=public&filter=id:eq:${businessId}`,
      },
    },
  });
}

async function createUserProfile(
  data: SignUpSchemaType
): Promise<number | null> {
  const { data: userId } = await supabase
    .from("profile")
    .insert([
      {
        name: data.name,
        nic: data.nic,
        email: data.email,
        mobile: data.mobile,
        role: "Owner",
      },
    ])
    .select("id");

  if (userId === null) {
    return null;
  }

  return userId[0].id;
}

async function createBusiness(
  data: SignUpSchemaType,
  userId: number
): Promise<number | null> {
  const { data: businessId } = await supabase
    .from("business")
    .insert([
      {
        name: data.business_name,
        approved_branches: data.total_branches,
        approved_cashiers: data.total_employees,
        uniquename: data.business_id,
        business_type: getBusinessType(data),
        business_category_id:
          data.business_type.id === 999 ? null : data.business_type.id,
        owner_id: userId,
      },
    ])
    .select("id");

  if (businessId === null) {
    return null;
  }

  return businessId[0].id;
}

function getBusinessType(
  data: SignUpSchemaType
): "StockBased" | "ServiceBased" {
  if (data.business_type.name === "Other") {
    return data.business_category?.id === BusinessType.StockBased
      ? "StockBased"
      : "ServiceBased";
  }

  return data.business_type?.business_type || "StockBased";
}

function checkBusinessCategory(data: SignUpSchemaType): boolean {
  if (data.business_type.name === "Other") {
    if (data.business_category === undefined) {
      toast.add({
        title: "Error",
        description: "Please select your business category",
        color: "red",
      });
      return false;
    }
  }
  return true;
}
</script>

<template>
  <div
    class="w-full min-h-screen flex justify-center items-center bg-[url(/img/auth-background.png)] bg-cover bg-center p-5"
  >
    <div class="w-full max-w-[600px] bg-white shadow-lg rounded-lg">
      <div
        class="flex flex-col col-span-full lg:col-span-3 rounded-l-lg text-gray-800 p-8"
      >
        <h1 class="text-2xl font-bold uppercase text-center">Request Access</h1>
        <UDivider class="my-5" />

        <p class="text-sm">
          Request access to our POS system by filling out the form below. Once
          submitted, we will contact you to discuss pricing based on the number
          of cashiers in your shop. Our POS system is offered with a one-time
          payment, giving you lifetime access without monthly fees. After your
          details are reviewed, we'll guide you through the next steps to set up
          your admin account. Start streamlining your shop's operations today!
        </p>

        <UDivider class="my-5" />

        <UForm
          :schema="SignUpSchema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <div class="grid lg:grid-cols-12 gap-3">
            <div class="lg:col-span-6">
              <UFormGroup label="Your Name" name="name">
                <UInput v-model="state.name" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-6">
              <UFormGroup label="NIC Number" name="nic">
                <UInput v-model="state.nic" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-5">
              <UFormGroup label="Mobile Number" name="mobile">
                <UInput v-model="state.mobile" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-7">
              <UFormGroup label="Email Address" name="email">
                <UInput v-model="state.email" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-6">
              <UFormGroup label="Business Name" name="business_name">
                <UInput v-model="state.business_name" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-6">
              <UFormGroup
                label="Business ID"
                hint="unique"
                :error="errorOnBussinessId && errorMessage"
                name="business_id"
              >
                <UInput
                  v-model="state.business_id"
                  @blur="isFocusLeavedOrSubmitted = true"
                >
                  <template
                    #trailing
                    v-if="
                      state.business_id !== undefined &&
                      state.business_id !== ''
                    "
                  >
                    <Icon
                      name="material-symbols:check-rounded"
                      class="text-green-500 text-xl"
                      v-show="!isUniqueNameTaken"
                    />
                    <Icon
                      name="material-symbols:cancel-outline"
                      class="text-red-500 text-xl"
                      v-show="isUniqueNameTaken"
                    />
                  </template>
                </UInput>
              </UFormGroup>
            </div>

            <div class="lg:col-span-6">
              <UFormGroup label="Total Branches" name="total_branches">
                <UInput v-model="state.total_branches" type="number" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-6">
              <UFormGroup label="Total Employees" name="total_employees">
                <UInput v-model="state.total_employees" type="number" />
              </UFormGroup>
            </div>

            <div
              :class="{
                'col-span-full': state.business_type?.name !== 'Other',
                'lg:col-span-6': state.business_type?.name === 'Other',
              }"
            >
              <UFormGroup label="Business Type" name="business_type">
                <USelectMenu
                  searchable
                  searchable-placeholder="Search for your business..."
                  v-model="state.business_type"
                  size="lg"
                  placeholder="Select your business type"
                  option-attribute="name"
                  :options="businessTypes || []"
                />
              </UFormGroup>
            </div>

            <div
              v-if="state.business_type?.name === 'Other'"
              class="lg:col-span-6"
            >
              <UFormGroup label="Business Category" name="business_category">
                <USelectMenu
                  v-model="state.business_category"
                  size="lg"
                  placeholder="Select your business category"
                  option-attribute="name"
                  :options="[
                    { id: BusinessType.StockBased, name: 'Stock Based' },
                    { id: BusinessType.ServiceBased, name: 'Service Based' },
                  ]"
                />
              </UFormGroup>
            </div>
          </div>

          <UButton
            label="Request Access"
            color="black"
            block
            type="submit"
            :loading="isLoading"
            @click="isFocusLeavedOrSubmitted = true"
          />
        </UForm>
        <div class="flex flex-col items-center mt-5">
          <span>Already Have An Account?</span>
          <NuxtLink class="text-blue-500" to="/sign-in">Sign In</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
