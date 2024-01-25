<template>
  <section>
    <UCard>
      <template #header>
        <img class="mx-auto" :src="$props.card.image" />
      </template>

      <h2 class="text-center">{{ $props.card.title }}</h2>
      <template #footer>
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
