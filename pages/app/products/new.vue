<script setup lang="ts">
import { ref } from "vue";
import UEditor from "~/components/UEditor.vue";

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

const isOpen = ref(false);
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
          <div
            class="flex gap-2 text-blue-700"
            label="Open"
            @click="isOpen = true"
          >
            <Icon name="material-symbols:add" class="cursor-pointer mt-1" />
            <p class="cursor-pointer font-bold">Add Category</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-3">
          <div class="grid lg:col-span-1 sm:col-span-1">
            <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
              Product Name
            </h3>
            <label
              for="fileField"
              class="attachment block bg-gray-200/30 dark:bg-gray-900/30"
            >
              <div
                class="row btn-file border h-48 w-full border-dashed border-gray-300 rounded-lg p-1 text-center cursor-pointer relative"
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
            

            <div class="mb-4">
              <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
                Product Name
              </h3>
              <UInput />
            </div>

            <div class="mb-4">
              <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
                Brand
              </h3>
              <UInput />
            </div>
            <div>
              <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
                select category
              </h3>
              <USelectMenu
                v-model="selected"
                :options="category"
                multiple
                placeholder="Select category"
                size="lg"
              />
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
            Description
          </h3>
          <UEditor />
          <div class="flex justify-end gap-4 mt-4">
            <UButton
              color="red"
              variant="solid"
              icon="i-heroicons-trash-20-solid"
            />
            <UButton label="Publish" variant="solid" class="uppercase" />
          </div>
        </div>
      </UContent>
    </NuxtLayout>
  </div>

  <!-- Modal Here -->
  <div>
    <UModal v-model="isOpen" :transition="false">
      <div class="h-full p-4">
        <h3
          class="text-lg uppercase text-gray-800 dark:text-gray-200 font-semibold mb-3"
        >
          Add New Category
        </h3>
        <div class="mb-6 mt-11">
          <h3 class="text-xs uppercase text-gray-500 font-semibold mb-1">
            Category
          </h3>
          <UInput />
        </div>
        <div class="flex uppercase justify-end">
          <UButton label="Add Category" variant="solid" />
        </div>
      </div>
    </UModal>
  </div>
</template>

<style scoped>
.btn-file__preview {
  background-size: cover;
  background-position: center;
}
</style>
