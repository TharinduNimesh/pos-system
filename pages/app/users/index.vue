<script setup lang="ts">
const isMoreInformationModelOpen = ref(false);
const isEditInformationModelOpen = ref(false);
const Role = ["Cashiers", "Manager"];
const selected = ref(Role[0]);

const productListAction = [
  [
    {
      label: "More Information",
      icon: "flowbite:info-circle-outline",
      click: (row: (typeof newUser)[0]) =>
        (isMoreInformationModelOpen.value = true),
    },
  ],
  [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
      click: (row: (typeof newUser)[0]) =>
        (isEditInformationModelOpen.value = true),
    },
    {
      label: "Remove",
      icon: "material-symbols:delete-outline-rounded",
    },
  ],
];

const newUsercolumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "nic",
    label: "NIC",
  },
  {
    key: "address",
    label: "Address",
  },

  {
    key: "number",
    label: "Contact Number",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const newUser = [
  {
    id: 1,
    name: "Sachith Prasan",
    nic: "200510904889",
    address: "No. 123/A, Rajagiriya Rd. Colombo",
    number: "0112241241",
    role: "Cashier",
  },

  {
    id: 2,
    name: "Sachith Prasan",
    nic: "200510904889",
    address: "No. 123/A, Rajagiriya Rd. Colombo",
    number: "0112241241",
    role: "Cashier",
  },
  {
    id: 3,
    name: "Sachith Prasan",
    nic: "200510904889",
    address: "No. 123/A, Rajagiriya Rd. Colombo",
    number: "0112241241",
    role: "Cashier",
  },
  {
    id: 4,
    name: "Sachith Prasan",
    nic: "200510904889",
    address: "No. 123/A, Rajagiriya Rd. Colombo",
    number: "0112241241",
    role: "Cashier",
  },
];
</script>
<template>
  <div>
    <NuxtLayout name="app">
      <div class="flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-3">
          <UContent>
            <div class="flex flex-col gap-3">
              <h3
                class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
              >
                Manage Users
              </h3>
              <div class="p-3 border border-primary/10 rounded-lg">
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
                >
                  <div
                    class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                  >
                    <div
                      class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                    >
                      <Icon
                        name="material-symbols:user-attributes-rounded"
                        class="text-xl"
                      />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Maximum Cashier Count
                    </h3>
                    <span class="text-xl font-bold"> 10 </span>
                  </div>
                  <div
                    class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                  >
                    <div
                      class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                    >
                      <Icon
                        name="material-symbols:manage-accounts"
                        class="text-xl"
                      />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Current Cashier Count
                    </h3>
                    <span class="text-xl font-bold"> 07 </span>
                  </div>
                </div>
              </div>

              <UTable :columns="newUsercolumns" :rows="newUser" class="mt-5">
                <template #name-data="{ row }">
                  <div class="flex flex-col">
                    <div class="text-gray-800 dark:text-gray-200">
                      {{ row.name }}
                    </div>
                    <div
                      class="text-gray-500 dark:text-gray-400 text-xs font-semibold"
                    >
                      {{ row.role }}
                    </div>
                  </div>
                </template>

                <template #actions-data="{ row }">
                  <div class="flex gap-3">
                    <UDropdown
                      :items="productListAction"
                      :ui="{
                        item: {
                          disabled: 'cursor-text select-text',
                        },
                      }"
                      :popper="{
                        placement: 'bottom-start',
                        arrow: true,
                      }"
                    >
                      <UButton
                        icon="solar:menu-dots-bold"
                        variant="ghost"
                        color="gray"
                      />
                    </UDropdown>
                  </div>
                </template>
              </UTable>
            </div>
          </UContent>
        </div>
        <!-- MoreInformationModel -->
        <UModal v-model="isMoreInformationModelOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">User Information</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isMoreInformationModelOpen = false"
                />
              </div>
            </template>

            <div class="flex flex-col gap-3">
              <div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
                  <UFormGroup label="Name">
                    <UInput disabled icon="material-symbols:account-circle" />
                  </UFormGroup>

                  <UFormGroup label="NIC">
                    <UInput disabled icon="material-symbols:id-card-outline" />
                  </UFormGroup>
                </div>

                <div class="col-span-2 mt-6">
                  <div class="grid gap-6">
                    <UFormGroup label="Address">
                      <UInput disabled icon="icomoon-free:location" />
                    </UFormGroup>
                    <UFormGroup label="Email">
                      <UInput
                        disabled
                        icon="material-symbols-light:mark-email-unread"
                      />
                    </UFormGroup>
                    <UFormGroup label="Branch">
                      <UInput disabled icon="ph:building-office-fill" />
                    </UFormGroup>
                  </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  <UFormGroup label="Contact Number">
                    <UInput
                      disabled
                      icon="material-symbols-light:phone-enabled-sharp"
                    />
                  </UFormGroup>
                  <UFormGroup label="Role">
                    <UInput
                      disabled
                      icon="material-symbols:user-attributes-rounded"
                    />
                  </UFormGroup>
                </div>
              </div>
            </div>

            <template #footer>
              <div class="flex justify-end gap-3">
                <UButton
                  label="Close"
                  color="gray"
                  @click="isMoreInformationModelOpen = false"
                />
              </div>
            </template>
          </UCard>
        </UModal>

        <!-- EditInformationModel -->
        <UModal v-model="isEditInformationModelOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Update User Information</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isEditInformationModelOpen = false"
                />
              </div>
            </template>

            <div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
                <UFormGroup label="Name">
                  <UInput
                    placeholder="Name"
                    icon="material-symbols:account-circle"
                  />
                </UFormGroup>

                <UFormGroup label="NIC">
                  <UInput disabled icon="material-symbols:id-card-outline" />
                </UFormGroup>
              </div>

              <div class="col-span-2 mt-6">
                <div class="grid gap-6">
                  <UFormGroup label="Address">
                    <UInput
                      placeholder="Address"
                      icon="icomoon-free:location"
                    />
                  </UFormGroup>
                  <UFormGroup label="Email">
                    <UInput
                      placeholder="you@example.com"
                      icon="material-symbols-light:mark-email-unread"
                    />
                  </UFormGroup>
                </div>
              </div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <UFormGroup label="Contact Number">
                  <UInput
                    placeholder="011- XXXXXXX"
                    icon="material-symbols-light:phone-enabled-sharp"
                  />
                </UFormGroup>
                <UFormGroup label="Role">
                  <USelectMenu size="lg" color="gray" v-model="selected" :options="Role" />
                </UFormGroup>
              </div>
            </div>

            <template #footer>
              <div class="flex justify-end gap-3">
                <UButton
                  label="Cancel"
                  color="gray"
                  @click="isEditInformationModelOpen = false"
                />
                <UButton label="Save" />
              </div>
            </template>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>
  </div>
</template>
