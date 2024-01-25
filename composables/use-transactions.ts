import supabase from "~/lib/supabase";
import { ref } from "vue";
import { type Finances } from "~/types/finances";
export const useTransactions = () => {
  const transactions = ref<Finances[] | null>([]);

  const fetchTransactions = async () => {
    try {
      const response = await supabase.from("transactions").select("*");
      transactions.value = response.data;
      console.log(response.data);
    } catch (error) {
      throw new Error(`An error occurred: ${error}`);
    }
  };

  fetchTransactions();

  return { transactions, fetchTransactions };
};
