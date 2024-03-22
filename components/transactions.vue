<template>
  <UInput v-model="q" placeholder="Filtrar transações..." />

  <UTable
    v-if="isLoading"
    loading
    :loading-state="{
      icon: 'i-heroicons-arrow-path-20-solid',
      label: 'Carregando...',
    }"
  />

  <UTable v-else="isLoading" v-model="selected" :rows="filteredRows" />

  <USelectMenu v-model="selected" :options="periods" placeholder="Período" />

  <div
    class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
  >
    <UPagination
      v-model="page"
      :page-count="pageCount"
      :total="rowTransactionsValue.length"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useTransactions } from "~/composables/use-transactions";
import {
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
} from "date-fns";

const periods = ref(["Diário", "Semanal", "Mensal", "Anual"]);
const selected = ref(periods.value[0]);
const q = ref("");
const page = ref(1);
const pageCount = 5;

const { isLoading, fetchTransactions, transactions } = useTransactions();

onMounted(() => {
  fetchTransactions(dateBounds.value.start, dateBounds.value.end);
});

const dateBounds = computed(() => {
  const now = new Date();
  const startOfCurrentDay = startOfDay(now);
  const endOfCurrentDay = endOfDay(now);
  const startOfCurrentMonth = startOfMonth(now);
  const endOfCurrentMonth = endOfMonth(now);
  const startOfCurrentWeek = startOfWeek(now);
  const endOfCurrentWeek = endOfWeek(now);
  const startOfCurrentYear = startOfYear(now);
  const endOfCurrentYear = endOfYear(now);

  switch (selected.value) {
    case "Diário":
      return { start: startOfCurrentDay, end: endOfCurrentDay };
    case "Semanal":
      return { start: startOfCurrentWeek, end: endOfCurrentWeek };
    case "Mensal":
      return { start: startOfCurrentMonth, end: endOfCurrentMonth };
    case "Anual":
      return { start: startOfCurrentYear, end: endOfCurrentYear };
    default:
      return { start: startOfCurrentDay, end: endOfCurrentDay };
  }
});

watch(
  () => selected.value,
  () => {
    fetchTransactions(dateBounds.value.start, dateBounds.value.end);
  },
  { deep: true }
);

const rows = computed(() => {
  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return rowTransactionsValue.value.slice(start, end);
});

const rowTransactionsValue = computed(() => {
  return transactions.value.map((transaction) => {
    return {
      categoria: transaction.category,
      descrição: transaction.description,
      valor: transaction.amount,
      data: new Date(transaction.date).toLocaleDateString(),
    };
  });
});

const filteredRows = computed(() => {
  if (!q.value) {
    return rows.value;
  }

  return rowTransactionsValue.value.filter((row) => {
    return Object.values(row).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase());
    });
  });
});
</script>
