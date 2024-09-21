<script setup lang="ts">
const Role = ['Cashiers','Manager']

const selected = ref(Role[0])
</script>


<template>
  <div>
    <NuxtLayout name="app">
      <div class="flex flex-col">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-3">
          <UContent>
            <div class="flex flex-col justify-between">
              <div class="flex flex-col">
                <h3
                  class="text-xl uppercase text-gray-800 dark:text-gray-200 font-semibold"
                >
                  Add New Users
                </h3>
              </div>
            </div>
            <div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <UFormGroup label="Name">
                  <UInput
                    placeholder="Name"
                    icon="material-symbols:account-circle"
                  />
                </UFormGroup>

                <UFormGroup label="NIC">
                  <UInput
                    placeholder="NIC"
                    icon="material-symbols:id-card-outline"
                  />
                </UFormGroup>
              </div>
                
            
              <div class="col-span-2 mt-6">
                <div class="grid gap-6">
                  <UFormGroup label="Address">
                    <UInput
                      placeholder="Address"
                      icon="icomoon-free:location"
                    />
                  </UFormGroup>
                  <UFormGroup label="Email">
                    <UInput
                      placeholder="you@example.com"
                      icon="material-symbols-light:mark-email-unread"
                    />
                  </UFormGroup>
                </div>
              </div>
              <div class="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
              <UFormGroup label="Contact Number">
                <UInput
                  placeholder="011- XXXXXXX"
                  icon="material-symbols-light:phone-enabled-sharp"
                />
              </UFormGroup>
              <UFormGroup label="Role">
                <UInputMenu v-model="selected" :options="Role" />
              </UFormGroup>
              </div>
            </div>

            <div class="flex justify-end mt-4 gap-6">
              <UButton color="gray" variant="outline">Clear</UButton>
              <UButton variant="solid">Add User</UButton>
            </div>
          </UContent>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
