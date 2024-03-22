<template>
  <section class="flex flex-col items-center rounded-md mt-3">
    <div class="flex flex-col md:flex-row items-center gap-8">
      <h3
        class="dark:text-gray-500 text-center font-semibold text-2xl leading-8"
      >
        {{ $props.title }}
      </h3>
    </div>
    <h2
      class="text-center font-semibold text-3xl md:text-4xl leading-relaxed tracking-tight mt-6"
    >
      <span class="text-sm">R$ </span>{{ $props.amount }}
    </h2>
  </section>
</template>

<script setup lang="ts">
const $props = defineProps({
  title: String,
  percentage: Number,
  amount: Number,
});
</script>
