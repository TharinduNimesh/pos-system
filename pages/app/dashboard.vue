<script setup lang="ts">
const profitFromBranchcolumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "branch",
    label: "Branch",
  },
  {
    key: "profit",
    label: "Profit",
  },
];

const profitsFromBranches = [
  {
    id: 1,
    branch: "Colombo",
    profit: "Rs. 120,000.00",
  },
  {
    id: 2,
    branch: "Gampaha",
    profit: "Rs. 100,000.00",
  },
  {
    id: 3,
    branch: "Kelaniya",
    profit: "Rs. 80,000.00",
  },
  {
    id: 4,
    branch: "Kandy",
    profit: "Rs. 50,000.00",
  },
  {
    id: 5,
    branch: "Kurunegala",
    profit: "Rs. 40,000.00",
  },
];

const lowStockColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "product",
    label: "Product",
  },
  {
    key: "remaining",
    label: "Remaining",
  },
];

const lowStockData = [
  {
    id: 1,
    product: "iPhone 12 Pro case",
    remaining: "10",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21 case",
    remaining: "15",
  },
  {
    id: 3,
    product: "Google Pixel 5 case",
    remaining: "8",
  },
  {
    id: 4,
    product: "OnePlus 9 case",
    remaining: "5",
  },
];

const mostSellingProductColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "product",
    label: "Product",
  },
  {
    key: "branch",
    label: "Most Selling Branch",
  },
];

const mostSellingProducts = [
  {
    id: 1,
    product: "iPhone 12 Pro case",
    branch: "Colombo",
  },
  {
    id: 2,
    product: "Samsung Galaxy S21 case",
    branch: "Gampaha",
  },
  {
    id: 3,
    product: "Google Pixel 5 case",
    branch: "Kelaniya",
  },
  {
    id: 4,
    product: "OnePlus 9 case",
    branch: "Kandy",
  },
];

const latestSalesColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "products",
    label: "Products",
  },
  {
    key: "branch",
    label: "Branch",
  },
  {
    key: "price",
    label: "Price",
  },
];

const latestSales = [
  {
    id: 1,
    products: "iPhone 12 Pro case, Samsung Galaxy S21 case",
    branch: "Colombo",
    price: "Rs. 120,000.00",
  },
  {
    id: 2,
    products: "Google Pixel 5 case, OnePlus 9 case",
    branch: "Gampaha",
    price: "Rs. 100,000.00",
  },
  {
    id: 3,
    products: "iPhone 12 Pro case, Samsung Galaxy S21 case",
    branch: "Kelaniya",
    price: "Rs. 80,000.00",
  },
];
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="flex flex-col gap-3">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-3">
          <div class="flex flex-col col-span-full lg:col-span-2 gap-3">
            <UContent>
              <div class="flex justify-between">
                <div class="flex flex-col">
                  <h3 class="text-sm uppercase text-gray-500 font-semibold">
                    Total Revenue
                  </h3>
                  <span class="text-xl font-bold"> Rs. 399,020.00 </span>
                </div>
                <div class="flex justify-center items-center">
                  <Icon name="teenyicons:money-stack-solid" class="text-3xl" />
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
                      name="material-symbols:attach-money"
                      class="text-xl"
                    />
                  </div>
                  <h3
                    class="text-xs uppercase text-gray-500 font-semibold mt-2"
                  >
                    Today Revenue
                  </h3>
                  <span class="text-xl font-bold"> 1,200 </span>
                </div>
                <div
                  class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
                >
                  <div
                    class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary"
                  >
                    <Icon
                      name="material-symbols:stacked-line-chart"
                      class="text-xl"
                    />
                  </div>
                  <h3
                    class="text-xs uppercase text-gray-500 font-semibold mt-2"
                  >
                    Monthly Revenue
                  </h3>
                  <span class="text-xl font-bold"> 1,200 </span>
                </div>
              </div>
            </UContent>

            <UContent>
              <div class="flex flex-col gap-3">
                <h3
                  class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Profit From Branches
                </h3>
                <UTable
                  :columns="profitFromBranchcolumns"
                  :rows="profitsFromBranches"
                />
              </div>
            </UContent>

            <UContent>
              <div class="flex flex-col gap-3">
                <h3
                  class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Most Selling Products
                </h3>
                <ChartMostSellingProducts />
              </div>
            </UContent>
          </div>

          <div class="flex flex-col gap-3 col-span-full lg:col-span-3">
            <!-- Total Revenue Chart -->
            <ChartTotalRevenue />

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <UContent>
                <div class="flex flex-col gap-3">
                  <h3
                    class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold"
                  >
                    Low Stock Items
                  </h3>
                  <UTable :columns="lowStockColumns" :rows="lowStockData" />
                </div>
              </UContent>

              <UContent>
                <div class="flex flex-col gap-3">
                  <h3
                    class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold"
                  >
                    Most Selling Products
                  </h3>
                  <UTable
                    :columns="mostSellingProductColumns"
                    :rows="mostSellingProducts"
                  />
                </div>
              </UContent>
            </div>

            <UContent>
              <div class="flex flex-col gap-3">
                <h3
                  class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Latest Sells
                </h3>
                <UTable
                  :columns="latestSalesColumns"
                  :rows="latestSales"
                />
              </div>
            </UContent>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
th span {
  white-space: nowrap !important;
}
</style>
