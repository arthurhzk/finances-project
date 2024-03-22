import supabase from "~/lib/supabase";
import TransactionEnum from "~/enums/TransactionEnum";
import { ref } from "vue";

export const useTransactions = (period: any) => {
  const transactions = ref<any[] | null>([]);
  const isLoading = ref(false);
  const transactionValue = ref([] as TransactionEnum[]);
  const fetchTransactions = async (start: Date, end: Date) => {
    isLoading.value = true;
    try {
      const response = await supabase
        .from("transactions")
        .select("*")
        .gte("date", start.toISOString())
        .lte("date", end.toISOString())
        .order("date", { ascending: false });

      transactions.value = response.data;

      isLoading.value = false;
    } catch (error) {
      throw new Error(`An error occurred: ${error}`);
    }
  };

  const getTotalValue = (category: TransactionEnum) => {
    const filteredTransactions = transactions.value
      ? transactions.value.filter(
          (transaction) => transaction.category === category
        )
      : [];
    const totalValue = filteredTransactions?.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
    transactionValue.value = totalValue;

    return transactionValue.value;
  };

  return {
    transactions,
    fetchTransactions,
    getTotalValue,
    isLoading,
    transactionValue,
  };
};
