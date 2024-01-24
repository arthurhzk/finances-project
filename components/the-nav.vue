<script setup lang="ts">
const links = [
  {
    label: "Registrar",
    icon: "i-heroicons-book-open",
    to: "/register",
  },
  {
    label: "Acessar",
    icon: "i-heroicons-square-3-stack-3d",
    to: "/login",
  },
  {
    label: "Contato",
    icon: "i-heroicons-rocket-launch",
    to: "/contact",
  },
];
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UDocsSearchButton label="" />

      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt/ui"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="links" />
    </template>
  </UHeader>
</template>
