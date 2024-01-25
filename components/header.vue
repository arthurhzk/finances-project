<template>
  <header class="flex flex-col md:flex-row justify-between items-center mb-10">
    <NuxtLink to="/" class="text-l md:text-xl font-bold">
      WiseHub - Soluções Financeiras
    </NuxtLink>
    <div>
      <UDropdown>
        <div class="flex items-center gap-8">
          <NuxtLink to="/login">Login</NuxtLink>
          <NuxtLink to="/register">Registrar</NuxtLink>
          <set-theme></set-theme>
        </div>
        <template #account> </template>
        <template #item="{ item }"> </template>
      </UDropdown>
    </div>
  </header>
</template>
