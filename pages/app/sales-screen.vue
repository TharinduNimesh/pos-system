<script setup lang="ts">
enum BillingAction {
  UseAnEBill,
  PrintABill,
  ContinueWithoutBill,
}

enum ProductSearchMethod {
  ByProductName,
  ByStockID,
}

const billingOptions = [
  {
    label: "Use an E-Bill",
    value: BillingAction.UseAnEBill,
  },
  {
    label: "Print a Bill",
    value: BillingAction.PrintABill,
  },
  {
    label: "Continue without bill",
    value: BillingAction.ContinueWithoutBill,
  },
];
const productSearchMethod = ref<ProductSearchMethod>(
  ProductSearchMethod.ByProductName
);
const isChangeStockModalOpen = ref(false);
const isDiscountModalOpen = ref(false);
const selectedStock = ref(2);
const searchQuery = ref("");
const selectedBillingAction = ref<(typeof billingOptions)[0]>(
  billingOptions[BillingAction.ContinueWithoutBill]
);

const isProductChooserOpen = computed(() => {
  if (productSearchMethod.value === ProductSearchMethod.ByStockID) {
    return false;
  }

  return searchQuery.value.length > 0;
});

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
  {
    key: "actions",
    label: "Actions",
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

const productListAction = [
  [
    {
      label: "Switch Stock",
      icon: "material-symbols:switch-access-shortcut-rounded",
      click: (row: (typeof selectedProducts)[0]) =>
        (isChangeStockModalOpen.value = true),
    },
    {
      label: "Add Discount",
      icon: "material-symbols:percent-rounded",
      click: (row: (typeof selectedProducts)[0]) =>
        (isDiscountModalOpen.value = true),
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
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <UContent>
          <div class="flex flex-col">
            <h3
              class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
            >
              Product Details
            </h3>
            <div class="mt-3 text-sm grid grid-cols-2 gap-3 text-gray-400">
              <div
                class="text-center cursor-pointer"
                :class="{
                  'text-gray-700 font-semibold dark:text-slate-200 px-1 pb-1 border-b-2 border-b-primary/60':
                    productSearchMethod === ProductSearchMethod.ByProductName,
                }"
                @click="productSearchMethod = ProductSearchMethod.ByProductName"
              >
                <span>By Product</span>
              </div>
              <div
                class="text-center cursor-pointer"
                :class="{
                  'text-gray-700 font-semibold dark:text-slate-200 px-1 pb-1 border-b-2 border-b-primary/60':
                    productSearchMethod === ProductSearchMethod.ByStockID,
                }"
                @click="productSearchMethod = ProductSearchMethod.ByStockID"
              >
                <span>By Stock ID</span>
              </div>
            </div>
            <div class="flex mt-5 gap-3 items-end flex-row-reverse">
              <UButton color="primary" label="Get" />
              <UFormGroup
                class="flex-1"
                :label="
                  productSearchMethod === ProductSearchMethod.ByProductName
                    ? 'Product Name'
                    : 'Stock Item ID'
                "
                :ui="{
                  label: {
                    base: 'text-xs text-gray-600 dark:text-gray-400',
                  },
                }"
              >
                <UInput
                  :placeholder="
                    productSearchMethod === ProductSearchMethod.ByProductName
                      ? 'Enter Product Name'
                      : 'Enter Stock ID'
                  "
                  icon="material-symbols:search-rounded"
                  v-model="searchQuery"
                />
              </UFormGroup>
            </div>
            <div class="px-5">
              <UDivider class="my-8" />
            </div>
            <div class="flex flex-col text-sm gap-3">
              <div class="flex gap-3">
                <span class="font-semibold uppercase">Name: </span>
                <div>Motorola G24 Power, 8GB, 128GB</div>
              </div>

              <div class="flex gap-3">
                <span class="font-semibold uppercase">Selling Price: </span>
                <div>RS. 49,999.00</div>
              </div>

              <div class="flex gap-3">
                <span class="font-semibold uppercase">Total Qty: </span>
                <div>12 items in 3 stock</div>
              </div>

              <div class="flex flex-col gap-1">
                <span class="font-semibold uppercase">Selected Quantity: </span>
                <div class="flex">
                  <UButton
                    color="gray"
                    icon="material-symbols:remove"
                    class="rounded-r-none"
                  />
                  <UInput
                    class="flex-1"
                    :ui="{
                      rounded: 'rounded-none',
                      base: 'text-center',
                    }"
                  />
                  <UButton
                    color="gray"
                    icon="material-symbols:add"
                    class="rounded-l-none"
                  />
                </div>
              </div>
              <div class="px-5">
                <UDivider class="my-3" />
              </div>
              <UButton label="Add to Cart" block />
              <UButton
                label="Change Stock"
                color="gray"
                block
                @click="isChangeStockModalOpen = true"
              />
            </div>
          </div>
        </UContent>

        <UContent class="xl:col-span-2 h-[600px]">
          <div class="flex h-full flex-col justify-between">
            <div
              class="flex-1 flex flex-col overflow-y-hidden overflow-x-hidden"
            >
              <div class="flex justify-between items-center">
                <h3
                  class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Products List
                </h3>

                <div class="sm:flex gap-3 grid">
                  <UButton
                    label="Add Discount"
                    icon="material-symbols:add"
                    variant="ghost"
                    @click="isDiscountModalOpen = true"
                  />
                  <USelectMenu
                    size="lg"
                    class="w-48"
                    v-model="selectedBillingAction"
                    :options="billingOptions"
                    placeholder="Select An Action"
                  />
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

            <div class="flex justify-end pt-5">
              <div class="flex flex-col gap-1 text-sm">
                <div class="flex gap-2 justify-between">
                  <span>Subtotal: </span>
                  <span class="font-semibold uppercase">LKR 49,999.00</span>
                </div>
                <div class="flex gap-2 justify-between">
                  <span>Discount: </span>
                  <span class="font-semibold uppercase">LKR 999.00</span>
                </div>
                <div class="flex gap-2 justify-between">
                  <span>Total: </span>
                  <span class="font-semibold uppercase">LKR 49,000.00</span>
                </div>

                <div class="mt-3 flex gap-3">
                  <UButton label="Clear" color="gray" />
                  <UButton label="Proceed to Checkout" />
                </div>
              </div>
            </div>
          </div>
        </UContent>

        <!-- Change Stock Modal Start -->
        <UModal v-model="isChangeStockModalOpen">
          <UCard
            :ui="{
              ring: '',
            }"
          >
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold">Change Stock</h3>
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  class="-my-1"
                  @click="isChangeStockModalOpen = false"
                />
              </div>
            </template>

            <div class="flex flex-col gap-3">
              <AppStockChooser
                v-for="stock in [1, 2, 3]"
                :key="stock"
                :stock="{
                  id: stock.toString(),
                  stockedAt: new Date().toISOString(),
                  price: 1200,
                  quantity: 87,
                }"
                :isSelected="stock == selectedStock"
                @select="selectedStock = $event"
              />
            </div>
          </UCard>
        </UModal>
        <!-- Change Stock Modal End -->

        <!-- Add Discount Modal Start -->
        <AppDiscountModal v-model="isDiscountModalOpen" />
        <!-- Add Discount Modal End -->

        <!-- Product Search Modal Start -->
        <UModal v-model="isProductChooserOpen">
          <AppProductChooser />
        </UModal>
        <!-- Product Search Modal End -->
      </div>
    </NuxtLayout>
  </div>
</template>
