<template>
  <section
    class="flex flex-col space-y-4 md:flex-row items-center justify-between mb-10"
  >
    <h1 class="text-4xl font-extrabold text-center">
      Sumário de {{ store.userEmail }}
    </h1>

    <USelectMenu :options="periodTransactions" v-model="selectedView" />
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
      class="mx-auto flex-col md:flex-row w-[450px] h-[450px] flex justify-between"
    >
      <expenses-chart
        :amount="totalAmount"
        :expenses="totalExpenses"
        :gains="totalGains"
        :investments="totalInvestments"
      ></expenses-chart>
    </div>
  </section>
  <div class="flex justify-start"></div>
  <div class="space-y-4 flex flex-col md:flex-row items-center justify-between">
    <h3 class="text-2xl font-extrabold text-center pt-5">Movimentação</h3>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      color="gray"
      variant="outline"
      placeholder="Procure por algo..."
    />
    <transaction-modal></transaction-modal>
  </div>
  <transactions />
</template>

<script setup>
const selectedView = ref(periodTransactions[0]);
import { useUserStore } from "~/store/user";
import { useTransactions } from "~/composables/use-transactions";
import periodTransactions from "~/constants/period-transactions";
const { totalAmount, totalInvestments, totalGains, totalExpenses } =
  useTransactions();
const store = useUserStore();
onMounted(async () => {
  await store.getUserMetadata();
});
const cards = [
  { title: "Saldo", amount: totalAmount, percentage: 50 },
  { title: "Investimentos", amount: totalInvestments, percentage: 50 },
  { title: "Ganhos", amount: totalGains, percentage: 50 },
  { title: "Despesas", amount: totalExpenses, percentage: 50 },
];
</script>
