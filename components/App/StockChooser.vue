<script setup lang="ts">
type Stock = {
  id: string;
  stockedAt: string;
  price: number;
  quantity: number;
};

defineProps({
  stock: {
    type: Object as PropType<Stock>,
    required: true,
  },
  isSelected: Boolean,
});
</script>

<template>
  <div
    class="flex justify-between w-full rounded-lg p-3 border border-transparent"
    :class="{
      'bg-primary/5 border border-primary/20': isSelected,
      'cursor-pointer hover:bg-gray-100/90 dark:hover:bg-gray-800/40': !isSelected,
    }"
    @click="$emit('select', stock.id)"
  >
    <div class="flex flex-col">
      <h3>{{ new Date(stock.stockedAt).toLocaleDateString() }}</h3>
      <div class="text-gray-500 text-sm">
        Unit Price: LKR {{ stock.price.toLocaleString() }}
      </div>
      <div class="text-gray-500 text-sm">Stock ID: {{ stock.id }}</div>
    </div>

    <div class="flex flex-col items-end">
      <span>Qty: {{ stock.quantity }}</span>
      <UButton
        size="sm"
        color="black"
        :label="isSelected ? 'Selected' : 'Select'"
        class="mt-2"
        :disabled="isSelected"
        @click="$emit('select', stock.id)"
      />
    </div>
  </div>
</template>
