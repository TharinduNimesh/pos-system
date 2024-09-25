<script setup lang="ts">
import { format } from "date-fns";

const columns = [
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

const date = ref(new Date());
const isEditModalOpen = ref<boolean>(false);
const form = ref<any>({
  product: "",
  quantity: "",
  buyingPrice: "",
  sellingPrice: "",
  hasDiscount: false,
  discount: "",
});

function addToStock() {
  const addedProduct = {
    id: addedProducts.value.length + 1,
    product: form.value.product,
    qty: form.value.quantity,
    buyingPrice: form.value.buyingPrice,
    sellingPrice: form.value.sellingPrice,
    discount: form.value.hasDiscount ? form.value.discount : "",
  };
  addedProducts.value.push(addedProduct);
  form.value = {
    product: "",
    quantity: "",
    buyingPrice: "",
    sellingPrice: "",
    hasDiscount: false,
    discount: "",
  };
}

const stockItemAction = [
  [
    {
      label: "Edit",
      icon: "material-symbols:edit",
      click: () => (isEditModalOpen.value = true),
    },
    {
      label: "Delete",
      icon: "material-symbols:delete",
    },
  ],
];
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <UContent>
        <div class="flex justify-between items-center">
          <h3
            class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
          >
            Add New Stock
          </h3>
          <UButton
            color="black"
            icon="material-symbols:add"
            label="Add New Product"
            size="sm"
            to="/app/products/new"
          />
        </div>

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

          <div class="col-span-full flex justify-end gap-3">
            <UButton color="gray" label="Clear" />
            <UButton label="Add To Stock" @click="addToStock" />
          </div>
        </div>

        <div class="md:px-10">
          <UDivider class="py-8" />
        </div>

        <UTable
          :rows="addedProducts"
          :columns="columns"
          class="max-h-[400px] overflow-scroll"
        >
          <template #product="{ row }">
            <span>{{ row.product.label }}</span>
          </template>

          <template #actions-data="{ row }">
            <div class="flex gap-3">
              <UDropdown
                :items="stockItemAction"
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

        <div class="flex flex-col items-end gap-3 mt-5">
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
          <div class="flex gap-3">
            <UButton
              icon="material-symbols:close"
              label="Clear Stock"
              color="gray"
            />
            <UButton icon="material-symbols:save" label="Save Stock" />
          </div>
        </div>
      </UContent>

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
