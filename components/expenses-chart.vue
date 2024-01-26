<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Pie } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
export default {
  name: "ExpensesChart",
  components: { Pie },
  props: {
    amount: {
      type: Number,
    },
    expenses: {
      type: Number,
    },
    gains: {
      type: Number,
    },
    investments: {
      type: Number,
    },
  },
  computed: {
    chartData() {
      return {
        labels: ["Quantidade", "Gastos", "Ganhos", "Investimentos"],
        datasets: [
          {
            backgroundColor: ["#00C58E", "#FF0000", "#3182CE", "#A0AEC0"],

            data: [this.amount, this.expenses, this.gains, this.investments],
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
      };
    },
  },
};
</script>
~/enums/transactionEnum
