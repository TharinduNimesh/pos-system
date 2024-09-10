<script setup>
const color = useColorMode();

const isDark = computed(() => color.value === "dark");
function toggleColorMode() {
  color.value = isDark.value ? "light" : "dark";
}
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
