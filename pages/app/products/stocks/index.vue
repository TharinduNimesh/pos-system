<script setup lang="ts">
const isInfoProductModalOpen = ref(false);
const isEditModalOpen = ref<boolean>(false);
const form = ref<any>({
  product: "",
  quantity: "",
  buyingPrice: "",
  sellingPrice: "",
  hasDiscount: false,
  discount: "",
});

const products = [
  {
    id: "prod001",
    label: "iPhone 13 Pro Max",
  },
  {
    id: "prod002",
    label: "Samsung Galaxy S21 Ultra",
  },
  {
    id: "prod003",
    label: "Google Pixel 6 Pro",
  },
  {
    id: "prod004",
    label: "OnePlus 9 Pro",
  },
  {
    id: "prod005",
    label: "Sony Xperia 1 III",
  },
  {
    id: "prod006",
    label: "Xiaomi Mi 11 Ultra",
  },
  {
    id: "prod007",
    label: "Oppo Find X3 Pro",
  },
  {
    id: "prod008",
    label: "Huawei P50 Pro",
  },
];

const stockColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "stock",
    label: "STOCK",
  },
  {
    key: "totalWorth",
    label: "TOTAL WORTH",
  },
  {
    key: "estimatedProfit",
    label: "Estimated Profit",
  },
  {
    key: "actions",
  },
];

const stockDetailsColumns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "product.label",
    label: "PRODUCT NAME",
  },
  {
    key: "qty",
    label: "QUANTITY",
  },
  {
    key: "buyingPrice",
    label: "BUYING PRICE",
  },
  {
    key: "sellingPrice",
    label: "SELLING PRICE",
  },
  {
    key: "discount",
    label: "Discount",
  },
  {
    key: "actions",
  },
];

interface Product {
  id: string;
  label: string;
}

const addedProducts = ref<
  {
    id: number;
    product: Product;
    qty: string;
    buyingPrice: string;
    sellingPrice: string;
    discount: string;
  }[]
>([
  {
    id: 1,
    product: { id: "prod001", label: "iPhone 13 Pro Max" },
    qty: "10",
    buyingPrice: "1000.00",
    sellingPrice: "1200.00",
    discount: "5",
  },
  {
    id: 2,
    product: { id: "prod002", label: "Samsung Galaxy S21 Ultra" },
    qty: "15",
    buyingPrice: "900.00",
    sellingPrice: "1100.00",
    discount: "10",
  },
  {
    id: 3,
    product: { id: "prod003", label: "Google Pixel 6 Pro" },
    qty: "8",
    buyingPrice: "800.00",
    sellingPrice: "950.00",
    discount: "7",
  },
  {
    id: 4,
    product: { id: "prod004", label: "OnePlus 9 Pro" },
    qty: "12",
    buyingPrice: "750.00",
    sellingPrice: "900.00",
    discount: "5",
  },
  {
    id: 5,
    product: { id: "prod005", label: "Sony Xperia 1 III" },
    qty: "5",
    buyingPrice: "950.00",
    sellingPrice: "1100.00",
    discount: "8",
  },
  {
    id: 6,
    product: { id: "prod006", label: "Xiaomi Mi 11 Ultra" },
    qty: "20",
    buyingPrice: "700.00",
    sellingPrice: "850.00",
    discount: "6",
  },
  {
    id: 7,
    product: { id: "prod007", label: "Oppo Find X3 Pro" },
    qty: "18",
    buyingPrice: "650.00",
    sellingPrice: "800.00",
    discount: "9",
  },
  {
    id: 8,
    product: { id: "prod008", label: "Huawei P50 Pro" },
    qty: "10",
    buyingPrice: "850.00",
    sellingPrice: "1000.00",
    discount: "4",
  },
  {
    id: 9,
    product: { id: "prod009", label: "Nokia 8.3 5G" },
    qty: "7",
    buyingPrice: "600.00",
    sellingPrice: "750.00",
    discount: "3",
  },
  {
    id: 10,
    product: { id: "prod010", label: "Asus ROG Phone 5" },
    qty: "6",
    buyingPrice: "1200.00",
    sellingPrice: "1400.00",
    discount: "5",
  },
]);

const stocks = [
  {
    id: 1,
    name: "Apple iPhone 13 Pro Max, Samsung S21 Ultra, and 3 more items",
    totalWorth: "LKR 5000",
    estimatedProfit: "LKR 1200",
    stockedAt: "2023-10-01",
  },
  {
    id: 2,
    name: "Dell XPS 13, MacBook Pro, and 2 more items",
    totalWorth: "LKR 7000",
    estimatedProfit: "LKR 1500",
    stockedAt: "2023-09-25",
  },
  {
    id: 3,
    name: "Sony WH-1000XM4, Bose QuietComfort 35, and 1 more item",
    totalWorth: "LKR 1000",
    estimatedProfit: "LKR 300",
    stockedAt: "2023-09-20",
  },
  {
    id: 4,
    name: "Samsung Galaxy Tab S7, iPad Pro, and 4 more items",
    totalWorth: "LKR 8000",
    estimatedProfit: "LKR 2000",
    stockedAt: "2023-09-15",
  },
  {
    id: 5,
    name: "HP Spectre x360, Lenovo ThinkPad X1, and 3 more items",
    totalWorth: "LKR 6000",
    estimatedProfit: "LKR 1400",
    stockedAt: "2023-09-10",
  },
];

const stockListAction = (row: (typeof stocks)[0]) => [
  [
    {
      label: "More Information",
      icon: "flowbite:info-circle-outline",
      click: (row: (typeof stocks)[0]) => (isInfoProductModalOpen.value = true),
    },
  ],
  [
    {
      label: "Append New Product",
      icon: "material-symbols:edit-square-outline-rounded",
      click: (row: (typeof stocks[0])) =>
      (isEditModalOpen.value = true),
    },
    {
      label: "Remove",
      icon: "material-symbols:delete-outline-rounded",
    },
  ],
];

const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
  return stocks.slice((page.value - 1) * pageCount, page.value * pageCount);
});
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <UContent>
        <div class="flex justify-between items-center">
          <h3
            class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
          >
            Manage Stock
          </h3>
          <UButton
            color="black"
            icon="material-symbols:add"
            label="Add New Stock"
            size="sm"
            to="/app/products/stocks/new"
          />
        </div>
        <div class="grid grid-cols-1 mt-5">
          <UTable :rows="rows" :columns="stockColumns">
            <template #stock-data="{ row }">
              <div class="flex flex-col">
                <div class="text-gray-800 dark:text-gray-200">
                  {{ row.name }}
                </div>
                <div
                  class="text-gray-500 dark:text-gray-400 text-xs font-semibold"
                >
                  {{ row.stockedAt }}
                </div>
              </div>
            </template>

            <template #actions-data="{ row }">
              <UDropdown :items="stockListAction(row)">
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-ellipsis-horizontal-20-solid"
                />
              </UDropdown>
            </template>
          </UTable>
        </div>
        <div
          class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
        >
          <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="stocks.length"
          />
        </div>
      </UContent>

      <UModal v-model="isInfoProductModalOpen">
        <UCard :ui="{ ring: '' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">Product Info</h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isInfoProductModalOpen = false"
              />
            </div>
          </template>

          <!-- Product Info Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <!-- Total Sales -->
            <div
              class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
            >
              <div
                class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
              >
                <Icon name="material-symbols:finance-mode" class="text-xl" />
              </div>
              <span class="text-md font-semibold">450,000</span>

              <h3
                class="text-xs uppercase text-center text-gray-500 font-semibold"
              >
                Total Sales
              </h3>
            </div>

            <!-- Total Profit -->
            <div
              class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
            >
              <div
                class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
              >
                <Icon name="solar:hand-money-linear" class="text-2xl" />
              </div>
              <span class="text-md font-semibold"> 132,200 </span>
              <h3
                class="text-xs uppercase text-center text-gray-500 font-semibold"
              >
                Total Profit
              </h3>
            </div>
          </div>
          <div class="grid lg:col-span-3 sm:col-span-1 mt-3">
            <UTable
              :rows="addedProducts"
              :columns="stockDetailsColumns"
              class="max-h-[400px] overflow-scroll"
            >
              <template #product="{ row }">
                <span>{{ row.product.label }}</span>
              </template>
            </UTable>
          </div>

          <template #footer>
            <div class="flex justify-end gap-3">
              <UButton
                label="Close"
                color="gray"
                @click="isInfoProductModalOpen = false"
              />
            </div>
          </template>
        </UCard>
      </UModal>

      <UModal v-model="isEditModalOpen">
        <UCard
          :ui="{
            ring: '',
          }"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold">Edit Stock</h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isEditModalOpen = false"
              />
            </div>
          </template>

          <div class="grid grid-cols-2 mt-5 gap-x-3 gap-y-5">
            <UFormGroup label="Product">
              <UInputMenu
                v-model="form.product"
                :options="products"
                placeholder="Ex: Google Pixel 8 Pro"
              />
            </UFormGroup>

            <UFormGroup label="Quantity">
              <UInput
                v-model="form.quantity"
                type="number"
                min="0"
                placeholder="Ex: 10"
              />
            </UFormGroup>

            <UFormGroup label="Buying Price">
              <UInput
                v-model="form.buyingPrice"
                type="number"
                min="0"
                placeholder="Ex: 299,999.00"
              >
                <template #leading>
                  <span class="text-sm text-gray-500 dark:text-gray-400"
                    >LKR</span
                  >
                </template>
              </UInput>
            </UFormGroup>

            <UFormGroup label="Selling Price">
              <UInput
                v-model="form.sellingPrice"
                type="number"
                min="0"
                placeholder="Ex: 349,999.00"
              >
                <template #leading>
                  <span class="text-sm text-gray-500 dark:text-gray-400"
                    >LKR</span
                  >
                </template>
              </UInput>
            </UFormGroup>

            <UFormGroup label="Discount" class="col-span-full">
              <UInput
                v-model="form.discount"
                class="flex-1"
                :ui="{ icon: { leading: { pointer: '' } } }"
                icon="material-symbols:percent"
                trailing
                :disabled="!form.hasDiscount"
              >
                <template #leading>
                  <UCheckbox v-model="form.hasDiscount" />
                </template>
              </UInput>
            </UFormGroup>
          </div>

          <template #footer>
            <div class="flex justify-end gap-3">
              <UButton
                label="Cancel"
                color="gray"
                @click="isEditModalOpen = false"
              />
              <UButton label="Save" />
            </div>
          </template>
        </UCard>
      </UModal>
    </NuxtLayout>
  </div>
</template>
