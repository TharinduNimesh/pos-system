<script setup lang="ts">
const productListAction = [
  [
    {
      label: "More Information",
      icon: "flowbite:info-circle-outline",

    },

  ],
  [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
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
      </div>
    </NuxtLayout>
  </div>
</template>
