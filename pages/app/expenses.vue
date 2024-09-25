<script setup lang="ts">
const isOpen = ref(false);

const isEditExpensesInformationModelOpen = ref(false);
const isAchiveModelOpen = ref(false);
const expensesListAction = [
  [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
      click: (row: (typeof newExpenses)[0]) =>
        (isEditExpensesInformationModelOpen.value = true),
    },
  ],
  [
    {
      label: "Undo",
      icon: "icon-park-outline:undo",
      click: (row: (typeof newExpenses)[0]) => (isAchiveModelOpen.value = true),
    },
  ],
];

const newExpensescolumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "date",
    label: "Date of Expense",
  },
  {
    key: "category",
    label: "Expense Category",
  },
  {
    key: "amount",
    label: "Amount (LKR)",
  },

  {
    key: "paymentmethod",
    label: "Payment Method",
  },
  {
    key: "reference",
    label: "Reference Number",
  },

  {
    key: "description",
    label: "Description",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const newExpenses = [
  {
    id: 1,
    date: "2024-05-10 14:05:55",
    category: "Utilities",
    amount: "50000.00",
    paymentmethod: "Cash",
    reference: "22125474",
    description: "Any Description",
  },

  {
    id: 2,
    date: "2024-05-10 14:05:55",
    category: "Sallary",
    amount: "500000.00",
    paymentmethod: "Bank Transfer",
    reference: "22125474",
    description: "Any Description",
  },

  {
    id: 3,
    date: "2024-05-10 14:05:55",
    category: "Utilities",
    amount: "50000.00",
    paymentmethod: "Cash",
    reference: "22125474",
    description: "Any Description",
  },

  {
    id: 4,
    date: "2024-05-10 14:05:55",
    category: "Utilities",
    amount: "50000.00",
    paymentmethod: "Cash",
    reference: "22125474",
    description: "Any Description",
  },

  {
    id: 5,
    date: "2024-05-10 14:05:55",
    category: "Sallary",
    amount: "500000.00",
    paymentmethod: "Bank Transfer",
    reference: "22125474",
    description: "Any Description",
  },

  {
    id: 6,
    date: "2024-05-10 14:05:55",
    category: "Other",
    amount: "500000.00",
    paymentmethod: "Bank Transfer",
    reference: "22125474",
    description: "Any Description",
  },
];

const categories = ["Rent", "Utilities", "Salaries", "Purchases", "Marketing"];
const category = ref(categories[0]);

const paymentss = ["Cash", "Card Payment", "Bank Transfer"];
const paymentmet = ref(paymentss[0]);
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-3">
          <UContent>
            <div class="flex flex-col gap-3">
              <div class="flex justify-between items-center">
                <h3
                  class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Expenses
                </h3>

                <UButton
                  color="black"
                  icon="material-symbols:add"
                  label="Add New Expense"
                  size="sm"
                  @click="isOpen = true"
                />
              </div>

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
                      <Icon name="ri:exchange-dollar-line" class="text-xl" />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Monthly Expense Count
                    </h3>
                    <span class="text-xl font-bold"> 12 </span>
                  </div>
                  <div
                    class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                  >
                    <div
                      class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                    >
                      <Icon name="bi:cash-coin" class="text-xl" />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Monthly Expense Amount (LKR)
                    </h3>
                    <span class="text-xl font-bold"> 5000000.00 </span>
                  </div>
                </div>
              </div>

              <UTable :columns="newExpensescolumns" :rows="newExpenses">
                <template #actions-data="{ row }">
                  <div class="flex gap-3">
                    <UDropdown
                      :items="expensesListAction"
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

              <!-- Slide Loader starts -->
              <USlideover v-model="isOpen">
                <div class="flex flex-col gap-x-3 p-4 mt-4">
                  <div>
                    <h3
                      class="text-xl uppercase text-gray-800 dark:text-gray-200 font-bold"
                    >
                      Add New Expenses
                    </h3>

                    <div class="grid lg:grid-cols-1 grid-cols-1 gap-6 mt-5">
                      <UFormGroup label="Amount (LKR)">
                        <UInput placeholder="Amount" icon="bi:coin" />
                      </UFormGroup>
                    </div>
                    <div class="grid lg:grid-cols-1 grid-cols-1 gap-6 mt-6">
                      <UFormGroup label="Expenses Category">
                        <USelect v-model="category" :options="categories" />
                      </UFormGroup>

                      <UFormGroup label="Payment Method">
                        <USelect v-model="paymentmet" :options="paymentss" />
                      </UFormGroup>
                    </div>

                    <div class="grid gap-6 mt-5">
                      <UFormGroup label="Description">
                        <UTextarea resize placeholder="Desciption" />
                      </UFormGroup>
                    </div>

                    <div class="flex justify-end gap-3 mt-6">
                      <UButton label="Save" />
                    </div>
                  </div>
                </div>
              </USlideover>

              <!-- Slide Loader ends -->
            </div>
          </UContent>
        </div>

        <!-- EditExpensesInformationModel -->

        <UModal v-model="isEditExpensesInformationModelOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Edit Expenses Information</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isEditExpensesInformationModelOpen = false"
                />
              </div>
            </template>

            <div class="flex flex-col gap-3">
              <div>
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-5">
                  <UFormGroup label="Reference Number">
                    <UInput
                      disabled
                      placeholder="Reference Number"
                      icon="ri:numbers-fill"
                    />
                  </UFormGroup>

                  <UFormGroup label="Amount (LKR)">
                    <UInput placeholder="Amount" icon="bi:coin" />
                  </UFormGroup>
                </div>
                <div class="grid lg:grid-cols-2 grid-cols-2 gap-6 mt-6">
                  <UFormGroup label="Expenses Category">
                    <USelect v-model="category" :options="categories" />
                  </UFormGroup>

                  <UFormGroup label="Payment Method">
                    <USelect v-model="paymentmet" :options="paymentss" />
                  </UFormGroup>
                </div>
                <div class="grid gap-6 mt-5">
                  <UFormGroup label="Description">
                    <UTextarea resize placeholder="Desciption" />
                  </UFormGroup>
                </div>
              </div>
            </div>

            <template #footer>
              <div class="flex justify-end gap-3">
                <UButton
                  label="Close"
                  color="gray"
                  @click="isEditExpensesInformationModelOpen = false"
                />
                <UButton label="Update" />
              </div>
            </template>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>
  </div>
</template>
