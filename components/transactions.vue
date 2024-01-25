<template>
  <UTable :rows="transactions" />
</template>

<script setup>
import { useTransactions } from "~/composables/use-transactions";
import { computed } from "vue";
const { transactions } = useTransactions();
onMounted(() => {
  console.log(transactions.value);
});
</script>
