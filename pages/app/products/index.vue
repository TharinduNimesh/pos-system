<script setup lang="ts">
const isDeleteProductModalOpen = ref(false);
const isUpdateProductModalOpen = ref(false);
const isInfoProductModalOpen = ref(false);
const selected = ref<string[]>([]);
const imagePreview = ref<string | null>(null);

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    imagePreview.value = URL.createObjectURL(file);
  }
};

const removeImage = () => {
  imagePreview.value = null;
};

const category = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

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

const productListAction = (row: (typeof products)[0]) => [
  [
    {
      label: "More Information",
      icon: "flowbite:info-circle-outline",
      click: () => {
        isInfoProductModalOpen.value = true;
      },
    },
  ],
  [
    {
      label: "Edit",
      icon: "material-symbols:edit-square-outline-rounded",
      click: () => {
        isUpdateProductModalOpen.value = true;
      },
    },
    {
      label: "Remove",
      icon: "material-symbols:delete-outline-rounded",
      click: () => {
        isInfoProductModalOpen.value = true;
      },
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
          <USelectMenu
            :options="['Mobile Phone', 'Laptop', 'Tv']"
            size="lg"
            placeholder="Sort by Category"
          />
          <USelectMenu
            :options="['Colombo', 'Kandy', 'Matara']"
            size="lg"
            placeholder="Sort by Branch"
          />
          <UInput placeholder="Search..." />
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
              <UDropdown :items="productListAction(row)">
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

  <!-- Modal Here -->
  <!-- Delete Product Here -->
  <div>
    <UModal v-model="isDeleteProductModalOpen">
      <UCard
        :ui="{
          ring: '',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-red-700">Are you sure ?</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isDeleteProductModalOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col gap-3">
          <p class="text-center">
            This action cannot be undone. All values associated with this
            product will be lost.
          </p>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton
              label="Cancel"
              color="gray"
              @click="isDeleteProductModalOpen = false"
            />
            <UButton label="Delete Product" color="red" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>

  <!-- Update Product Here -->
  <div>
    <UModal v-model="isUpdateProductModalOpen">
      <UCard
        :ui="{
          ring: '',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Update Product</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isUpdateProductModalOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col gap-3">
          <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-3">
            <div class="grid lg:col-span-1 sm:col-span-1">
              <h3 class="text-sm font-medium mb-1">Product Image</h3>
              <label for="fileField" class="attachment block">
                <div
                  class="row btn-file border h-[193px] w-full bg-gray-200/30 dark:bg-gray-900/30 border-dashed border-gray-300 rounded-lg p-1 text-center cursor-pointer relative"
                >
                  <!-- Preview Area -->
                  <div
                    v-if="imagePreview"
                    class="btn-file__preview h-[183px] w-full bg-center bg-cover rounded-lg"
                    :style="{
                      backgroundImage: 'url(' + imagePreview + ')',
                    }"
                  >
                    <!-- X Button for Removing Image -->
                    <UButton
                      @click="removeImage"
                      icon="material-symbols:cancel-rounded"
                      size="sm"
                      color="primary"
                      square
                      variant="solid"
                      class="flex rounded-full"
                    />
                  </div>

                  <div
                    v-else
                    class="btn-file__actions text-center flex justify-center items-center h-full"
                  >
                    <div class="btn-file__actions__item">
                      <div class="btn-file__actions__item--shadow">
                        <Icon
                          name="material-symbols:add-photo-alternate-outline"
                        />
                        <h3
                          class="text-xs uppercase text-gray-500 font-semibold mt-2"
                        >
                          select image
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  name="file"
                  type="file"
                  id="fileField"
                  class="hidden"
                  @change="handleFileChange"
                />
              </label>
            </div>

            <div class="grid lg:col-span-3 sm:col-span-1">
              <div class="mb-3">
                <UFormGroup label="Product Name" name="productName">
                  <UInput placeholder="Product Name" />
                </UFormGroup>
              </div>
              <div class="mb-3">
                <UFormGroup label="Brand" name="brand">
                  <UInput placeholder="Brand" />
                </UFormGroup>
              </div>
              <div>
                <UFormGroup label="Category" name="category">
                  <USelectMenu
                    v-model="selected"
                    :options="category"
                    multiple
                    placeholder="Select category"
                    size="lg"
                    color="gray"
                  />
                </UFormGroup>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <h3 class="text-sm font-medium mb-1">Description</h3>
            <UEditor />
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton
              label="Cancel"
              color="gray"
              @click="isUpdateProductModalOpen = false"
            />
            <UButton label="Delete " />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>

  <!-- Info Product Here -->
  <div>
    <UModal :ui="{ width: 'max-w-xl' }" v-model="isInfoProductModalOpen">
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
        <div class="">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
            <!-- Average Unit Price -->
            <div
              class="flex flex-col items-center p-5 rounded-lg bg-gray-200/30 dark:bg-gray-900/30 border border-primary/10"
            >
              <div
                class="w-10 h-10 flex justify-center items-center rounded-full bg-primary/20 text-primary mb-2"
              >
                <Icon
                  name="material-symbols:stacked-line-chart"
                  class="text-xl"
                />
              </div>
              <span class="text-md font-semibold"> 132,200 </span>
              <h3
                class="text-xs uppercase text-center text-gray-500 font-semibold"
              >
                Average Unit Price
              </h3>
            </div>

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
            <div class="mb-3">
              <UFormGroup label="Product Name" name="productName">
                <UInput
                  placeholder="Google Pixel 6 Pro, 8GB, 128GB, Space Gray."
                  disabled
                />
              </UFormGroup>
            </div>
            <div class="mb-3">
              <UFormGroup label="Brand" name="brand">
                <UInput placeholder="Google" disabled />
              </UFormGroup>
            </div>
            <div class="mb-3">
              <UFormGroup label="Category" name="category">
                <UInput placeholder="Mobile Phone" disabled />
              </UFormGroup>
            </div>
            <div>
              <UFormGroup label="Description" name="description">
                <UTextarea
                  placeholder="Description"
                  size="lg"
                  color="gray"
                  disabled
                />
              </UFormGroup>
            </div>
          </div>
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
  </div>
</template>
