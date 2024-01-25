<template>
  <UTable
    v-if="isLoading"
    loading
    :loading-state="{
      icon: 'i-heroicons-arrow-path-20-solid',
      label: 'Carregando...',
    }"
  />
  <UTable v-else="isLoading" v-model="selected" :rows="rows" />
  <div
    class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
  >
    <UPagination
      v-model="page"
      :page-count="pageCount"
      :total="transactions.length"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTransactions } from "~/composables/use-transactions";

const { transactions, isLoading } = useTransactions();

const selected = ref([]);
const page = ref(1);
const pageCount = 5;
const rows = computed(() => {
  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return transactions.value.slice(start, end);
});
</script>
