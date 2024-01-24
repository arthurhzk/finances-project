<template>
  <section>
    <UCard>
      <template #header>
        <Placeholder class="h-8" />

        <img class="mx-auto" :src="$props.card.image" />
      </template>
      <Placeholder class="h-32" />
      <h2 class="text-center">{{ $props.card.title }}</h2>
      <template #footer>
        <Placeholder class="h-10" />
        <h3 class="text-center">{{ $props.card.description }}</h3>
      </template>
    </UCard>
  </section>
</template>

<script setup lang="ts">
import { type Card } from "~/types/card";

const $props = defineProps<{
  card: Card;
}>();
</script>
