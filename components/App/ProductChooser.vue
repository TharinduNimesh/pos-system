<script setup lang="ts">
const commandPaletteRef = ref();

const suggestions = [
  { id: 1, label: "Samsung Galaxy S21" },
  { id: 2, label: "Samsung Galaxy S24 Ultra Case" },
  { id: 3, label: "Apple iPhone 13 Pro" },
  { id: 4, label: "TWS Airpods Pro 6" },
  { id: 5, label: "Google Pixel 6" },
  { id: 6, label: "OnePlus 9 Pro" },
  { id: 7, label: "Sony WH-1000XM4" },
  { id: 8, label: "Dell XPS 13" },
  { id: 9, label: "HP Spectre x360" },
  { id: 10, label: "Microsoft Surface Pro 7" },
  { id: 11, label: "Asus ROG Zephyrus G14" },
  { id: 12, label: "Lenovo ThinkPad X1 Carbon" },
  { id: 13, label: "Acer Swift 3" },
  { id: 14, label: "Razer Blade 15" },
  { id: 15, label: "MacBook Pro 16" },
  { id: 16, label: "Huawei MateBook X Pro" },
  { id: 17, label: "LG Gram 17" },
  { id: 18, label: "Alienware m15 R3" },
  { id: 19, label: "MSI GS66 Stealth" },
  { id: 20, label: "Gigabyte Aero 15" },
  { id: 21, label: "Samsung Galaxy Book Flex" },
  { id: 22, label: "Dell Inspiron 15" },
  { id: 23, label: "HP Envy 13" },
];

const groups = [
  {
    key: "suggestions",
    label: "Suggestions",
    inactive: "Application",
    commands: suggestions,
  },
];

const ui = {
  wrapper:
    "flex flex-col flex-1 min-h-0 divide-y divide-gray-200 dark:divide-gray-700 bg-gray-50 dark:bg-gray-800",
  container:
    "relative flex-1 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700 scroll-py-2",
  input: {
    base: "w-full h-14 px-4 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none",
  },
  group: {
    label: "px-2 my-2 text-xs font-semibold text-gray-500 dark:text-gray-400",
    command: {
      base: "flex justify-between select-none cursor-default items-center rounded-md px-2 py-2 gap-2 relative",
      active: "bg-gray-200 dark:bg-gray-700/50 text-gray-900 dark:text-white",
      container: "flex items-center gap-3 min-w-0",
      icon: {
        base: "flex-shrink-0 w-5 h-5",
        active: "text-gray-900 dark:text-white",
        inactive: "text-gray-400 dark:text-gray-500",
      },
      avatar: {
        size: "2xs" as const,
      },
    },
  },
};
</script>

<template>
  <UCommandPalette
    ref="commandPaletteRef"
    :groups="groups"
    icon=""
    :ui="ui"
    :autoselect="false"
    placeholder="Search for apps and commands"
    modelValue="Lin"
  />
</template>
