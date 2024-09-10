<script setup lang="ts">
import { SignUpSchema, type SignUpSchemaType } from "~/schema";
import type { FormSubmitEvent } from "#ui/types";

const color = useColorMode();
const state = ref({
  name: undefined,
  nic: undefined,
  mobile: undefined,
  email: undefined,
  business_name: undefined,
  total_cashiers: undefined,
});

color.preference = "light";

async function onSubmit(event: FormSubmitEvent<SignUpSchemaType>) {
  // Do something with data
  console.log(event.data);
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
          <div class="grid lg:grid-cols-2 gap-3">
            <div>
              <UFormGroup label="Your Name" name="name">
                <UInput v-model="state.name" />
              </UFormGroup>
            </div>

            <div>
              <UFormGroup label="NIC Number" name="nic">
                <UInput v-model="state.nic" />
              </UFormGroup>
            </div>
          </div>

          <div class="grid lg:grid-cols-5 gap-3">
            <div class="lg:col-span-2">
              <UFormGroup label="Mobile Number" name="mobile">
                <UInput v-model="state.mobile" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-3">
              <UFormGroup label="Email Address" name="email">
                <UInput v-model="state.email" />
              </UFormGroup>
            </div>
          </div>

          <div class="grid lg:grid-cols-5 gap-3">
            <div class="lg:col-span-3">
              <UFormGroup label="Business Name" name="business_name">
                <UInput v-model="state.business_name" />
              </UFormGroup>
            </div>

            <div class="lg:col-span-2">
              <UFormGroup label="Total Cashiers" name="total_cashiers">
                <UInput v-model="state.total_cashiers" />
              </UFormGroup>
            </div>
          </div>

          <UButton label="Request Access" color="black" block type="submit" />
        </UForm>
        <div class="flex flex-col items-center mt-5">
          <span>Already Have An Account?</span>
          <NuxtLink class="text-blue-500" to="/sign-in">Sign In</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
