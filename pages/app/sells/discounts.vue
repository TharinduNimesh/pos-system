<script setup lang="ts">
import { format } from "date-fns";

const isMoreInformationModelOpen = ref(false);
const date = ref(new Date());


const DiscountHistorycolumns = [
  {
    key: "id",
    label: "Invoice ID",
  },
  {
    key: "products",
    label: "products",
  },
  {
    key: "cashier",
    label: "Cashier",
  },
  {
    key: "reson",
    label: "Reson",
  },
  {
    key: "discount",
    label: "Discount",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const DiscountHistory = [
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    cashier:"Sachith Prasan",
    reson: "Mid Year Off",
    discount: "10%",

  },

  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    cashier:"Sachith Prasan",
    reson: "Mid Year Off",
    discount: "10%",

  },
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    cashier:"Sachith Prasan",
    reson: "Mid Year Off",
    discount: "10%",

  },
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    cashier:"Sachith Prasan",
    reson: "Mid Year Off",
    discount: "10%",

  },
];

const selectedProductColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "product",
    label: "Product",
  },
  {
    key: "unit_price",
    label: "Unit Price",
  },
  {
    key: "discount",
    label: "Discount",
  },
  {
    key: "reson",
    label: "Reson",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "total",
    label: "Total",
  },

];

const selectedProducts = [
{
    id: 2,
    product: "Samsung Galaxy S21, 8GB, 256GB",
    brand: "Samsung",
    unit_price: "RS. 89,999.00",
    discount: "10%",
    reson: "Mid Year Off",
    quantity: 1,
    total: "RS. 89,999.00",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21, 8GB, 256GB",
    brand: "Samsung",
    unit_price: "RS. 89,999.00",
    discount: "10%",
    reson: "Mid Year Off",
    quantity: 1,
    total: "RS. 89,999.00",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21, 8GB, 256GB",
    brand: "Samsung",
    unit_price: "RS. 89,999.00",
    discount: "10%",
    reson: "Mid Year Off",
    quantity: 1,
    total: "RS. 89,999.00",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21, 8GB, 256GB",
    brand: "Samsung",
    unit_price: "RS. 89,999.00",
    discount: "10%",
    reson: "Mid Year Off",
    quantity: 1,
    total: "RS. 89,999.00",
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
                Discount History
              </h3>

              <UTable
                :columns="DiscountHistorycolumns"
                :rows="DiscountHistory"
                class="mt-5"
              >
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
                    <UButton
                      icon="material-symbols:visibility-outline-rounded"
                      variant="ghost"
                      color="gray"
                      @click="isMoreInformationModelOpen = true"
                    />
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
                <h3 class="text-lg font-semibold">Invoice Information</h3>
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
                <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  <UFormGroup label="Invoice ID">
                    <UInput disabled icon="material-symbols:receipt-long-outline-rounded" />
                  </UFormGroup>
                  <UFormGroup label="Cashier">
                    <UInput disabled icon="material-symbols:account-circle-full" />
                  </UFormGroup>
                </div>
                <div class="mt-6">
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
                    <!-- Subtotal -->
                    <div
                      class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                    >
                      <div
                        class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
                      >
                        <Icon
                          name="material-symbols:attach-money-rounded"
                          class="text-xl"
                        />
                      </div>
                      <span class="text-md font-semibold"> 132,200 </span>
                      <h3
                        class="text-xs uppercase text-center text-gray-500 font-semibold"
                      >
                        Subtotal:
                      </h3>
                    </div>

                    <!-- Discount -->
                    <div
                      class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                    >
                      <div
                        class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
                      >
                        <Icon
                          name="material-symbols:shoppingmode-sharp"
                          class="text-xl"
                        />
                      </div>
                      <span class="text-md font-semibold">450,000</span>

                      <h3
                        class="text-xs uppercase text-center text-gray-500 font-semibold"
                      >
                        Discount:
                      </h3>
                    </div>

                    <!-- Total  -->
                    <div
                      class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                    >
                      <div
                        class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
                      >
                        <Icon name="material-symbols:attach-money-rounded" class="text-2xl" />
                      </div>
                      <span class="text-md font-semibold"> 132,200 </span>
                      <h3
                        class="text-xs uppercase text-center text-gray-500 font-semibold"
                      >
                        Total:
                      </h3>
                    </div>
                  </div>
                </div>
                <UTable
                  :columns="selectedProductColumns"
                  :rows="selectedProducts"
                  class="mt-5"
                >
                  <template #product-data="{ row }">
                    <div class="flex flex-col">
                      <span class="text-gray-700 dark:text-slate-400">{{
                        row.product
                      }}</span>
                      <span
                        class="text-xs font-semibold uppercase text-gray-500"
                        >{{ row.brand }}</span
                      >
                    </div>
                  </template>
                </UTable>
              </div>
            </div>
          </UCard>
        </UModal>
      </div>
    </NuxtLayout>
  </div>
</template>
