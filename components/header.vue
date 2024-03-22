<template>
  <header class="flex flex-col md:flex-row justify-between items-center mb-10">
    <NuxtLink to="/" class="md:text-xl font-bold">
      WiseHub - Soluções Financeiras
    </NuxtLink>
    <div>
      <div class="flex flex-col md:flex-row md:gap-8 items-center">
        <NuxtLink
          class="hover:text-green-500"
          v-if="!store.isLoggedIn"
          to="/login"
          >Login</NuxtLink
        >
        <NuxtLink
          class="hover:text-green-500"
          v-if="!store.isLoggedIn"
          to="/register"
          >Registrar</NuxtLink
        >

        <NuxtLink
          class="hover:text-green-500 cursor-pointer"
          to="/home"
          v-if="store.isLoggedIn"
          >Home</NuxtLink
        >

        <NuxtLink class="hover:text-green-500" to="/plans">Planos</NuxtLink>

        <set-theme />
        <p
          class="cursor-pointer hover:text-green-500"
          @click="store.signOutUser"
          v-if="store.isLoggedIn"
        >
          Finalizar Sessão
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const store = useUserStore();
</script>
