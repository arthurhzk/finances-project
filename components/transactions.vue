<template>
  <UTable :rows="transactions" />
</template>

<script setup>
import { useTransactions } from "~/composables/use-transactions";
const { transactions } = useTransactions();
</script>
