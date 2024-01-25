<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">Sumário</h1>
    <div>
      <USelectMenu :options="brandImages" v-model="selectedView" />
    </div>
  </section>

  <section
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10"
  >
    <financial-card
      title="Saldo"
      :amount="totalAmount"
      percentage="50"
    ></financial-card>
    <financial-card
      title="Investimentos"
      :amount="totalInvestments"
      percentage="50"
    ></financial-card>
    <financial-card
      title="Ganhos"
      :amount="totalGains"
      :percentage="50"
    ></financial-card>
    <financial-card
      title="Despesas"
      :amount="totalExpenses"
      :percentage="50"
    ></financial-card>
    <div class="chart mx-auto">
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
    <h3 class="text-2xl font-extrabold text-center pt-5">
      Movimentação de {{ store.userEmail }}
    </h3>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      color="gray"
      variant="outline"
      placeholder="Procure por algo..."
    />
    <transaction-modal></transaction-modal>
  </div>
  <transactions class="mt-8" />
</template>

<script setup>
import brandImages from "~/constants/period-transactions";
const selectedView = ref(brandImages[0]);
import { useUserStore } from "~/store/user";
import { useTransactions } from "~/composables/use-transactions";
const { totalAmount, totalInvestments, totalGains, totalExpenses } =
  useTransactions();
const store = useUserStore();
onMounted(async () => {
  await store.getUserMetadata();
});
</script>

<style scoped>
.chart {
  max-width: 450px;
  max-height: 350px;
}
</style>
