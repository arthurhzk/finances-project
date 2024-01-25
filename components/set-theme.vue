<template>
  <section class="flex items-center justify-center">
    <ClientOnly>
      <UButton
        :icon="
          isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
        "
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
    <p class="dark:text-slate-200 hidden md:block">
      Tema: {{ isDark ? "dark" : "light" }}
    </p>
  </section>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>
