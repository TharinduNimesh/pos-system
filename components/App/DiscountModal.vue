<script setup lang="ts">
defineProps({
  modelValue: Boolean,
});

enum DiscountMethod {
  FixedAmount,
  Percentage,
}

const selectedMethod = ref<DiscountMethod>(DiscountMethod.FixedAmount);
</script>

<template>
  <UModal :model-value="modelValue">
    <UCard
      :ui="{
        ring: '',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold">Add Discount</h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="$emit('update:modelValue', false)"
          />
        </div>
      </template>

      <div class="flex flex-col gap-3">
        <div class="flex gap-3">
          <UButton
            :color="
              selectedMethod === DiscountMethod.FixedAmount ? 'black' : 'gray'
            "
            label="Fixed Amount"
            class="rounded-full"
            size="xs"
            @click="selectedMethod = DiscountMethod.FixedAmount"
          />
          <UButton
            :color="
              selectedMethod === DiscountMethod.Percentage ? 'black' : 'gray'
            "
            label="Percentage"
            class="rounded-full"
            size="xs"
            @click="selectedMethod = DiscountMethod.Percentage"
          />
        </div>

        <div class="flex flex-col gap-3 mt-3">
          <UFormGroup
            label="Discount Amount"
            :ui="{
              label: {
                base: 'text-xs text-gray-600 dark:text-gray-400',
              },
            }"
          >
            <UInput
              placeholder="Enter Discount Amount"
              icon="material-symbols:percent-rounded"
            />
          </UFormGroup>

          <UFormGroup
            label="Reason"
            :ui="{
              label: {
                base: 'text-xs text-gray-600 dark:text-gray-400',
              },
            }"
          >
            <UInput
              placeholder="Enter Reason"
              icon="material-symbols:info-rounded"
            />
          </UFormGroup>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton
            label="Cancel"
            color="gray"
            @click="$emit('update:modelValue', false)"
          />
          <UButton label="Add Discount" />
        </div>
      </template>
    </UCard>
  </UModal>
</template>
