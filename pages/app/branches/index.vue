<script setup lang="ts">
const isMoreBranchInformationModelOpen = ref(false);
const isEditBranchInformationModelOpen = ref(false);
const productListAction = [
  [
    {
      label: "More Information",
      icon: "flowbite:info-circle-outline",
      click: (row: (typeof newBranches)[0]) =>
        (isMoreBranchInformationModelOpen.value = true),
    },
  ],
  [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
      click: (row: (typeof newBranches)[0]) =>
        (isEditBranchInformationModelOpen.value = true),
    },
    {
      label: "Remove",
      icon: "material-symbols:delete-outline-rounded",
    },
  ],
];

const newBranchcolumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "branch",
    label: "Branch Name",
  },
  {
    key: "manager",
    label: "Manager Name",
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
    key: "profit",
    label: "Monthly Profit (LKR)",
  },

  {
    key: "actions",
    label: "Actions",
  },
];

const newBranches = [
  {
    id: 1,
    branch: "Colombo",
    manager: "Sahan Hitige",
    address: "No. 123/A, Rajagiriya Rd. Colombo",
    number: "0112241241",
    profit: "100000.00",
  },

  {
    id: 2,
    branch: "Kandy",
    manager: "Nimesh Perera",
    address: "No. 123/A, Senanayake Rd. Kandy",

    number: "0112241242",
    profit: "100000.00",
  },
  {
    id: 3,
    branch: "Jafna",
    manager: "Ramlal Rakesh",
    address: "No. 123/A, Raja Rd. Jafna",
    number: "0112241243",
    profit: "100000.00",
  },
  {
    id: 4,
    branch: "Galle",
    manager: "Dasun Rajapakshe",
    address: "No. 123/A, Darmaraja Rd. Galle",
    number: "0112241244",
    profit: "100000.00",
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
                Manage Branches
              </h3>

              <UContent>
                <div class="flex justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-sm uppercase text-gray-500 font-semibold">
                      Branch Count
                    </h3>
                  </div>
                  <div class="flex justify-center items-center">
                    <Icon
                      name="icomoon-free:office"
                      class="text-3xl"
                    />
                  </div>
                </div>
                <div
                  class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
                >
                  <div
                    class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                  >
                    <div
                      class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                    >
                      <Icon
                        name="icomoon-free:office"
                        class="text-xl"
                      />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Maximum Branch Count
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
                        name="icomoon-free:office"
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
              </UContent>

              <UTable :columns="newBranchcolumns" :rows="newBranches">
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

        <!-- MoreBranchInformationModel -->

        <UModal v-model="isMoreBranchInformationModelOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Branch Information</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isMoreBranchInformationModelOpen = false"
                />
              </div>
            </template>

            <div class="flex flex-col gap-3">
              <div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-3">
                  <UFormGroup label="Branch Name">
                    <UInput
                      disabled
                      placeholder="Branch Name"
                      icon="ph:building-office-fill"
                    />
                  </UFormGroup>

                  <UFormGroup label="Manager Name">
                    <UInput
                      disabled
                      placeholder="Manager Name"
                      icon="solar:user-circle-bold"
                    />
                  </UFormGroup>
                </div>
                <div class="col-span-2 mt-6">
                  <div class="grid gap-6">
                    <UFormGroup label="Address">
                      <UInput
                        disabled
                        placeholder="Address"
                        icon="icomoon-free:location"
                      />
                    </UFormGroup>
                  </div>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  <UFormGroup label="Email">
                    <UInput
                      disabled
                      placeholder="you@example.com"
                      icon="material-symbols-light:mark-email-unread"
                    />
                  </UFormGroup>
                  <UFormGroup label="Contact Number">
                    <UInput
                      disabled
                      placeholder="011- XXXXXXX"
                      icon="material-symbols-light:phone-enabled-sharp"
                    />
                  </UFormGroup>
                  <UFormGroup label="Opening Hours">
                    <UInput
                      disabled
                      placeholder="08:00 - 18:00"
                      icon="material-symbols-light:calendar-clock"
                    />
                  </UFormGroup>
                  <UFormGroup label="Profit">
                    <UInput
                      disabled
                      placeholder="100000.00 LKR"
                      icon="cil:dollar"
                    />
                  </UFormGroup>
                </div>
              </div>
            </div>
          </UCard>
        </UModal>

        <!-- EditBranchInformationModel -->

        <UModal v-model="isEditBranchInformationModelOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Edit Branch Information</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isEditBranchInformationModelOpen = false"
                />
              </div>
            </template>

            <div class="flex flex-col gap-3">
              <div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-3">
                  <UFormGroup label="Branch Name">
                    <UInput
                      placeholder="Branch Name"
                      icon="ph:building-office-fill"
                    />
                  </UFormGroup>

                  <UFormGroup label="Manager Name">
                    <UInput
                      placeholder="Manager Name"
                      icon="solar:user-circle-bold"
                    />
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
                  <UFormGroup label="Opening Hours">
                    <UInput
                      placeholder="08:00 - 18:00"
                      icon="material-symbols-light:calendar-clock"
                    />
                  </UFormGroup>
                </div>
                <div class="flex justify-end mt-6 gap-6">
                  <UButton color="gray">Clear</UButton>
                  <UButton variant="solid">Update Branch</UButton>
                </div>
              </div>
            </div>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>
  </div>
</template>
