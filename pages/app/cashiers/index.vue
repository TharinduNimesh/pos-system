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
    key: "role",
    label: "Role",
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
              <UTable :columns="newUsercolumns" :rows="newUser">
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

