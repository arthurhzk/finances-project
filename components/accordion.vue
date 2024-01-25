<template>
  <div class="flex items-center justify-center gap-4">
    <UAccordion :items="items"></UAccordion>
  </div>
</template>

<script setup>
import navLinks from "~/constants/nav-links";

import { computed, onMounted } from "vue";

const getPathName = computed(() => {
  const getNames = navLinks.map((link) => link.name);
  return getNames.join(" | ");
});

const items = [
  {
    label: "Começar",
    icon: "i-heroicons-information-circle",
    defaultOpen: true,
    content: getPathName.value,
  },
];
</script>
