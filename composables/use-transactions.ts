import supabase from "~/lib/supabase";
import TransactionEnum from "~/enums/TransactionEnum";
import { computed, ref } from "vue";

export const useTransactions = () => {
  const transactions = ref<any[] | null>([]);
  const isLoading = ref(false);
  const fetchTransactions = async () => {
    isLoading.value = true;
    try {
      const response = await supabase.from("transactions").select("*");
      transactions.value = response.data;

      isLoading.value = false;
    } catch (error) {
      throw new Error(`An error occurred: ${error}`);
    }
  };

  const getTotalValue = (type: TransactionEnum) => {
    const filteredTransactions = transactions.value?.filter(
      (transaction) => transaction.tipo === type
    );
    return filteredTransactions;
  };

  const totalAmount = computed(() => {
    const getArray = getTotalValue(TransactionEnum.AMOUNT);
    const sum = getArray?.reduce((acc, cur) => acc + cur.quantidade, 0);
    return sum;
  });

  const totalInvestments = computed(() => {
    const getArray = getTotalValue(TransactionEnum.INVESTMENTS);
    const sum = getArray?.reduce((acc, cur) => acc + cur.quantidade, 0);
    return sum;
  });

  const totalGains = computed(() => {
    const getArray = getTotalValue(TransactionEnum.GAINS);
    const sum = getArray?.reduce((acc, cur) => acc + cur.quantidade, 0);
    return sum;
  });

  const totalExpenses = computed(() => {
    const getArray = getTotalValue(TransactionEnum.EXPENSES);
    const sum = getArray?.reduce((acc, cur) => acc + cur.quantidade, 0);
    return sum;
  });

  fetchTransactions();

  return {
    transactions,
    fetchTransactions,
    getTotalValue,
    totalAmount,
    totalInvestments,
    totalGains,
    totalExpenses,
    isLoading,
  };
};
