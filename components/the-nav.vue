<template>
  <section class="flex flex-col md:flex-row items-center justify-between">
    <h1>WiseHub - Soluçoes em Finanças</h1>
    <div v-for="item in navLinks" :key="item.name">
      <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import navLinks from "~/constants/nav-links.ts";
</script>
