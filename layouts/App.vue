<script setup>
const sidebarStore = useSidebarStore();
</script>

<template>
  <div class="flex bg-primary-bkg text-gray-700 dark:text-slate-200">
    <AppSideBar
      :is-open="sidebarStore.isOpen"
      @toggle-sidebar="sidebarStore.toggle"
    />
    <div class="flex-1 flex h-screen flex-col justify-between p-5 overflow-hidden overflow-y-scroll">
      <div class="w-full flex flex-col gap-5">
        <!-- Header Start -->
        <AppHeader @toggle-sidebar="sidebarStore.toggle" />
        <!-- Header End -->

        <!-- Content Start -->
        <slot />
        <!-- Content End -->
      </div>

      <!-- Footer Start -->
      <footer class="w-full pt-5">
        <div
          class="flex flex-col justify-between items-center text-center lg:flex-row lg:text-left border border-secondary-bkg dark:border-slate-900 bg-secondary-bkg rounded-xl shadow dark:shadow-black p-6"
        >
          <p class="text-sm text-gray-500">
            © 2024 <strong>HEYSH GROUP</strong>. All Rights Reserved.
          </p>
          <p class="text-sm text-gray-500">
            Powered by
            <ULink
              to="https://www.eversoft.lk"
              class="text-primary font-semibold"
              >Eversoft IT Solutions</ULink
            >
            .
          </p>
        </div>
      </footer>
      <!-- Footer End -->
    </div>
  </div>
</template>