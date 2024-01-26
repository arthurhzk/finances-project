<template>
  <header class="flex flex-col md:flex-row justify-between items-center mb-10">
    <NuxtLink to="/" class="text-l md:text-xl font-bold">
      WiseHub - Soluções Financeiras
    </NuxtLink>
    <div>
      <div class="flex items-center gap-8">
        <NuxtLink v-if="!store.isLoggedIn" to="/login">Login</NuxtLink>
        <NuxtLink v-if="!store.isLoggedIn" to="/register">Registrar</NuxtLink>
        <NuxtLink to="/home" v-if="store.isLoggedIn" class="cursor-pointer"
          >Home</NuxtLink
        >
        <p
          class="cursor-pointer"
          @click="store.signOutUser"
          v-if="store.isLoggedIn"
        >
          Finalizar Sessão
        </p>
        <set-theme></set-theme>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const store = useUserStore();
</script>
