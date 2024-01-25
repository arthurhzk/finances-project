<template>
  <header class="flex justify-between items-center mb-10">
    <NuxtLink to="/" class="text-xl font-bold">
      WiseHub - Soluções Financeiras
    </NuxtLink>
    <div>
      <UDropdown>
        <set-theme></set-theme>
        <template #account> </template>
        <template #item="{ item }"> </template>
      </UDropdown>
    </div>
  </header>
</template>
