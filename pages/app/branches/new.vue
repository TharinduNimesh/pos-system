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
                  Add New Branches
                </h3>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-6">
              <UFormGroup label="Branch Name">
                <UInput
                  placeholder="Branch Name"
                  icon="ph:building-office-fill"
                />
              </UFormGroup>

              <UFormGroup label="Manager Name">
                <UInput
                  placeholder="Manager Name"
                  icon="solar:user-circle-bold"
                />
              </UFormGroup>
              <div class="col-span-2 ">
                <div class="grid gap-6">
                <UFormGroup label="Address">
                  <UInput placeholder="Address" icon="icomoon-free:location" />
                </UFormGroup>
                <UFormGroup label="Email">
                  <UInput
                    placeholder="you@example.com"
                    icon="material-symbols-light:mark-email-unread"
                  />
                </UFormGroup>
              </div>
              </div>
              <UFormGroup label="Contact Number">
                <UInput
                  placeholder="011- XXXXXXX"
                  icon="material-symbols-light:phone-enabled-sharp"
                />
              </UFormGroup>
              <UFormGroup label="Opening Hours">
                <UInput
                  placeholder="08:00 - 18:00"
                  icon="material-symbols-light:calendar-clock"
                />
              </UFormGroup>
            </div>
            
              <div class="flex justify-end mt-4 gap-6">
              <UButton  color="red" variant="outline">Clear</UButton>
              <UButton  variant="solid">Save Branch</UButton>
            </div>

            
          </UContent>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
