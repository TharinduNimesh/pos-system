<script setup lang="ts">
const columns = [
  {
    key: "id",
    label: "#",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "description",
    label: "Description",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "qty",
    label: "Quantity",
  },
  {
    key: "actions",
  },
];

const products = [
  {
    id: 1,
    name: "Laptop Pro 15",
    brand: "TechBrand",
    qty: "10",
    category: "Electronics",
    stocks: 50,
    description: "High-performance laptop with 15-inch display.",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    brand: "SoundMax",
    qty: "5",
    category: "Accessories",
    stocks: 30,
    description: "Compact and high-quality wireless earbuds.",
  },
  {
    id: 3,
    name: "Smartphone X",
    brand: "MobileTech",
    qty: "6",
    category: "Mobile",
    stocks: 20,
    description: "Latest smartphone with advanced features.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    brand: "KeyMasters",
    qty: "9",
    category: "Accessories",
    stocks: 40,
    description: "Durable mechanical keyboard with customizable keys.",
  },
  {
    id: 5,
    name: "4K Monitor",
    brand: "Visionary",
    qty: "7",
    category: "Electronics",
    stocks: 25,
    description: "Ultra HD 4K monitor with vibrant colors.",
  },
  {
    id: 6,
    name: "Gaming Chair",
    brand: "ComfortPlus",
    qty: "11",
    category: "Furniture",
    stocks: 15,
    description: "Ergonomic gaming chair with adjustable features.",
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
          Manage Products
        </h3>
        <div class="flex gap-2 justify-end mb-3">
          <UInput />
          <UButton icon="gravity-ui:magnifier" />
        </div>
        <div class="grid grid-cols-1">
          <UTable :rows="products" :columns="columns">
            <template #name-data="{ row }">
              <div class="flex flex-col">
                <div class="text-gray-800 dark:text-gray-200">
                  {{ row.name }}
                </div>
                <div
                  class="text-gray-500 dark:text-gray-400 text-xs font-semibold"
                >
                  {{ row.brand }}
                </div>
              </div>
            </template>

            <template #qty-data="{ row }">
              {{ row.qty }} in stock ({{ row.stocks }} available)
            </template>

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
