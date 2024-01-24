<template>
  <UCard>
    <h2>{{ $props.card.title }}</h2>
    <h2>{{ $props.card.description }}</h2>
    <img class="mx-auto" :src="$props.card.image" alt="" />
  </UCard>
</template>

<script setup lang="ts">
import { type Card } from "~/types/card";

const $props = defineProps<{
  card: Card;
}>();
</script>
