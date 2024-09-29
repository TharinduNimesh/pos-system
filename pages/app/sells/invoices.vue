<script setup lang="ts">
import { format } from "date-fns";

const isMoreInformationModelOpen = ref(false);
const date = ref(new Date());


const SalesHistorycolumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "products",
    label: "products",
  },
  {
    key: "total",
    label: "Total",
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

const SalesHistory = [
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    discount: "10%",
  },

  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    discount: "10%",
  },
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
    discount: "10%",
  },
  {
    id: 1,
    products: "ZTE V50 DESIGN,8GB/128GB,VIOLET",
    total: "rs.45,990.00",
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
    id: 1,
    product: "Motorola G24 Power, 8GB, 128GB",
    brand: "Motorola",
    unit_price: "RS. 49,999.00",
    quantity: 1,
    total: "RS. 49,999.00",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21, 8GB, 256GB",
    brand: "Samsung",
    unit_price: "RS. 89,999.00",
    quantity: 1,
    total: "RS. 89,999.00",
  },
  {
    id: 3,
    product: "Apple iPhone 13, 6GB, 128GB",
    brand: "Apple",
    unit_price: "RS. 119,999.00",
    quantity: 1,
    total: "RS. 119,999.00",
  },
  {
    id: 4,
    product: "OnePlus 9 Pro, 12GB, 256GB",
    brand: "OnePlus",
    unit_price: "RS. 79,999.00",
    quantity: 1,
    total: "RS. 79,999.00",
  },
  {
    id: 5,
    product: "Sony WH-1000XM4 Wireless Headphones",
    brand: "Sony",
    unit_price: "RS. 29,999.00",
    quantity: 1,
    total: "RS. 29,999.00",
  },
  {
    id: 6,
    product: "JBL Tune 225TWS True Wireless Earbuds",
    brand: "JBL",
    unit_price: "RS. 9,999.00",
    quantity: 1,
    total: "RS. 9,999.00",
  },
  {
    id: 7,
    product: "Spigen Rugged Armor Case for iPhone 13",
    brand: "Spigen",
    unit_price: "RS. 2,499.00",
    quantity: 1,
    total: "RS. 2,499.00",
  },
  {
    id: 8,
    product: "OtterBox Defender Series Case for Galaxy S21",
    brand: "OtterBox",
    unit_price: "RS. 3,999.00",
    quantity: 1,
    total: "RS. 3,999.00",
  },
  {
    id: 9,
    product: "Anker PowerCore 10000 Portable Charger",
    brand: "Anker",
    unit_price: "RS. 4,999.00",
    quantity: 1,
    total: "RS. 4,999.00",
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
                Sales History
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
                        name="material-symbols:bar-chart-4-bars-rounded"
                        class="text-xl"
                      />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Total Sales
                    </h3>
                    <span class="text-xl font-bold"> Rs. 25,000 </span>
                  </div>
                  <div
                    class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                  >
                    <div
                      class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                    >
                      <Icon
                        name="material-symbols:add-chart-outline-rounded"
                        class="text-xl"
                      />
                    </div>
                    <h3
                      class="text-xs uppercase text-gray-500 font-semibold mt-2"
                    >
                      Total Profit
                    </h3>
                    <span class="text-xl font-bold"> Rs. 17,500 </span>
                  </div>
                </div>
              </div>

              <div class="flex gap-2 justify-end mb-3 mt-6">
                <UInput placeholder="Search..."
                icon="material-symbols:search" 
                />
                <UPopover :popper="{ placement: 'bottom-start' }">
                  <UButton
                    icon="i-heroicons-calendar-days-20-solid"
                    color="black"
                    :label="format(date, 'd MMM, yyy')"
                    block
                  />

                  <template #panel="{ close }">
                    <DatePicker v-model="date" @close="close" />
                  </template>
                </UPopover>
              </div>

              <UTable
                :columns="SalesHistorycolumns"
                :rows="SalesHistory"
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
                <div class="grid grid-cols-1 gap-3">
                  <UFormGroup label="Invoice ID">
                    <UInput disabled icon="material-symbols:receipt-long-outline-rounded" />
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
                          name="material-symbols:attach-money"
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
                        <Icon name="material-symbols:attach-money" class="text-2xl" />
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
