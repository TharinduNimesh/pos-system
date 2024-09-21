<script setup lang="ts">
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
const selected = ref<string[]>([]);
const imagePreview = ref<string | null>(null);
const isAddCategoryModalOpen = ref(false);

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
</script>

<template>
  <div>
    <NuxtLayout name="app">
      <UContent>
        <div class="flex justify-between">
          <h3
            class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold mb-3"
          >
            Add New Product
          </h3>
          <UButton
            label="Add Category"
            icon="material-symbols:add"
            color="primary"
            variant="ghost"
            @click="isAddCategoryModalOpen = true"
          />
        </div>
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
                <UInput />
              </UFormGroup>
            </div>
            <div class="mb-3">
              <UFormGroup label="Brand" name="brand">
                <UInput />
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
                />
              </UFormGroup>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-sm font-medium mb-1">Description</h3>
          <UEditor />
          <div class="flex justify-end gap-4 mt-4">
            <UButton label="Clear" color="gray" />
            <UButton label="Add This Product" />
          </div>
        </div>
      </UContent>
    </NuxtLayout>
  </div>

  <!-- Modal Here -->
  <div>
    <UModal v-model="isAddCategoryModalOpen" :transition="false">
      <UCard
        :ui="{
          ring: '',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold">Add New Category</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isAddCategoryModalOpen = false"
            />
          </div>
        </template>

        <div class="flex flex-col gap-3">
          <UFormGroup
            label="Category Name"
            :ui="{
              label: {
                base: 'text-xs text-gray-600 dark:text-gray-400',
              },
            }"
          >
            <UInput placeholder="Enter Category Name" />
          </UFormGroup>
        </div>

        <template #footer>
          <div class="flex justify-end gap-3">
            <UButton
              label="Cancel"
              color="gray"
              @click="isAddCategoryModalOpen = false"
            />
            <UButton label="Add New Category" />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<style scoped>
.btn-file__preview {
  background-size: cover;
  background-position: center;
}
</style>
