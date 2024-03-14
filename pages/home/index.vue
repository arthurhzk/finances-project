<template>
  <section
    class="flex flex-col space-y-4 md:flex-row items-center justify-between mb-10"
  >
    <h1 class="text-2xl md:text-4xl font-extrabold text-center">
      Sumário de {{ store.userEmail }}
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
      :percentage="card.percentage"
    />

    <div
      class="mx-auto w-[280px] h-[280px] flex-col md:flex-row md:w-[450px] md:h-[450px] flex justify-between"
    >
      <expenses-chart
        :amount="totalAmount"
        :expenses="totalExpenses"
        :gains="totalGains"
        :investments="totalInvestments"
      ></expenses-chart>
    </div>
  </section>

  <div class="space-y-4 flex flex-col md:flex-row items-center justify-between">
    <h3 class="text-lg md:text-2xl font-extrabold text-center pt-5">
      Movimentação
    </h3>

    <transaction-modal></transaction-modal>
  </div>
  <transactions />
</template>

<script setup>
import { useUserStore } from "~/store/user";
import { useTransactions } from "~/composables/use-transactions";
import TransactionEnum from "~/enums/TransactionEnum";
const { getTotalValue, fetchTransactions } = useTransactions();
const store = useUserStore();
const totalExpenses = ref();
const totalGains = ref();
const totalInvestments = ref();
const totalAmount = ref();
onMounted(async () => {
  await store.getUserMetadata();
  await fetchTransactions();
  totalExpenses.value = getTotalValue(TransactionEnum.EXPENSES);
  totalGains.value = getTotalValue(TransactionEnum.GAINS);
  totalInvestments.value = getTotalValue(TransactionEnum.INVESTMENTS);
  totalAmount.value = getTotalValue(TransactionEnum.AMOUNT);
});
const cards = [
  { title: "Saldo", amount: totalAmount, totalGains, percentage: 50 },
  { title: "Investimentos", amount: totalInvestments, percentage: 50 },
  { title: "Ganhos", amount: totalGains, percentage: 50 },
  {
    title: "Despesas",
    amount: totalExpenses,
    percentage: 50,
  },
];
</script>
