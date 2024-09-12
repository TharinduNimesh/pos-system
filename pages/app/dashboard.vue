<template>
  <div>
    <NuxtLayout name="app">
      <div class="flex flex-col gap-3">
        <UContent>
          <h1 class="text-2xl font-semibold">Dashboard</h1>
          <p class="text-gray-500 mt-2">
            Welcome to the dashboard. Here you can see all the important
            information at a glance.
          </p>
        </UContent>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <UContent>
            <h2 class="text-lg font-semibold">Sales</h2>
            <p class="text-gray-500 mt-2">
              Here you can see the sales of the current month.
            </p>
          </UContent>

          <UContent>
            <h2 class="text-lg font-semibold">Products</h2>
            <p class="text-gray-500 mt-2">
              Here you can see the products that are available in the store.
            </p>
          </UContent>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
