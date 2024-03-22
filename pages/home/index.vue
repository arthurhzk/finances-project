<template>
  <section
    class="flex flex-col space-y-4 md:flex-row items-center justify-between mb-10"
  >
    <h1 class="text-2xl md:text-4xl font-extrabold text-center">
      Sumário de {{ store.user?.name }}
    </h1>
  </section>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <financial-card
      v-for="card in cards"
      :key="card.title"
      :title="card.title"
      :amount="card.amount"
    />
    <USelectMenu v-model="selected" :options="periods" placeholder="Período" />
    <div
      class="mx-auto w-[280px] h-[280px] flex-col md:flex-row md:w-[450px] md:h-[450px] flex justify-between"
    >
      <expenses-chart
        :amount="reduceTransactionAmount"
        :expenses="reduceTransactionExpenses"
        :gains="reduceTransactionGains"
        :investments="reduceTransactionInvestments"
      ></expenses-chart>
    </div>
  </section>

  <div class="space-y-4 flex flex-col md:flex-row items-center justify-between">
    <h3 class="text-lg md:text-2xl font-extrabold text-center pt-5">
      Movimentação
    </h3>
    <div class="flex px-3 py-3.5 border-gray-200 dark:border-gray-700 gap-2">
      <UInput v-model="q" placeholder="Filtrar..." />
      <TransactionModal />
    </div>
  </div>
  <div>
    <UTable :rows="rows" />
    <UPagination
      v-model="page"
      :page-count="pageCount"
      :total="rowTransactionsValue.length"
    />
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user";
import TransactionEnum from "~/enums/TransactionEnum";
import { useTransactions } from "~/composables/use-transactions";
const { fetchTransactions, transactions } = useTransactions();
const store = useUserStore();

const selected = ref("Anual");

const q = ref("");
const page = ref(1);
const pageCount = 5;

const periods = ref(["Diário", "Semanal", "Mensal", "Anual"]);
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
      return {
        start: startOfCurrentDay,
        end: endOfCurrentDay,
      };
    case "Semanal":
      return {
        start: startOfCurrentWeek,
        end: endOfCurrentWeek,
      };
    case "Mensal":
      return {
        start: startOfCurrentMonth,
        end: endOfCurrentMonth,
      };
    case "Anual":
      return {
        start: startOfCurrentYear,
        end: endOfCurrentYear,
      };
    default:
      return {
        start: startOfCurrentDay,
        end: endOfCurrentDay,
      };
  }
});

watch(
  () => {
    selected.value;
  },
  (newVal) => {
    fetchTransactions(dateBounds.value.start, dateBounds.value.end);
  },
  {
    deep: true,
  }
);

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

const rows = computed(() => {
  const start = (page.value - 1) * pageCount;
  const end = page.value * pageCount;
  return rowTransactionsValue.value.slice(start, end);
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

onMounted(async () => {
  await store.getUserMetadata();
  fetchTransactions(dateBounds.value.start, dateBounds.value.end);
  useHead({
    title: `Dashboard de ${store.user?.name}`,
  });
});

const reduceTransactionAmount = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    if (transaction.category === TransactionEnum.AMOUNT) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);
});

const reduceTransactionGains = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    if (transaction.category === TransactionEnum.GAINS) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);
});

const reduceTransactionInvestments = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    if (transaction.category === TransactionEnum.INVESTMENTS) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);
});

const reduceTransactionExpenses = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    if (transaction.category === TransactionEnum.EXPENSES) {
      return acc + transaction.amount;
    }
    return acc;
  }, 0);
});

const cards = ref([
  { title: "Saldo", amount: reduceTransactionGains },
  {
    title: "Investimentos",
    amount: reduceTransactionInvestments,
  },
  { title: "Ganhos", amount: reduceTransactionAmount },
  {
    title: "Despesas",
    amount: reduceTransactionExpenses,
  },
]);
</script>
