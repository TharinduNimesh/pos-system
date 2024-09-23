<script setup lang="ts">
const columns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "productName",
    label: "PRODUCT NAME",
  },
  {
    key: "brand",
    label: "BRAND",
  },
  {
    key: "category",
    label: "CATEGORY",
  },
  {
    key: "qty",
    label: "QUANTITY",
  },
  {
    key: "actions",
  },
];

const products = [
  {
    id: 1,
    productName: "Laptop Pro 15",
    brand: "TechBrand",
    qty: "10",
    category: "Electronics",
  },
  {
    id: 2,
    productName: "Wireless Earbuds",
    brand: "SoundMax",
    qty: "5",
    category: "Accessories",
  },
  {
    id: 3,
    productName: "Smartphone X",
    brand: "MobileTech",
    qty: "6",
    category: "Mobile",
  },
  {
    id: 4,
    productName: "Mechanical Keyboard",
    brand: "KeyMasters",
    qty: "9",
    category: "Accessories",
  },
  {
    id: 5,
    productName: "4K Monitor",
    brand: "Visionary",
    qty: "7",
    category: "Electronics",
  },
  {
    id: 6,
    productName: "Gaming Chair",
    brand: "ComfortPlus",
    qty: "11",
    category: "Furniture",
  },
];

const items = (row) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];

const page = ref(1);
const pageCount = 5;

const rows = computed(() => {
  return products.slice((page.value - 1) * pageCount, page.value * pageCount);
});
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <UContent>
        <h3
          class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
        >
          Manage Stock
        </h3>
        <div class="flex gap-2 justify-end mb-3">
          <UInput />
          <UButton icon="gravity-ui:magnifier" />
        </div>
        <div class="grid grid-cols-1">
          <UTable :rows="products" :columns="columns">
            <template #actions-data="{ row }">
              <UDropdown :items="items(row)">
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
            :total="products.length"
          />
        </div>
      </UContent>
    </NuxtLayout>
  </div>
</template>
