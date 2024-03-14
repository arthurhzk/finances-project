import supabase from "~/lib/supabase";
import { ref } from "vue";

export const useAddTransactions = () => {
  const initialState = {
    description: undefined,
    category: undefined,
    amount: null,
    date: new Date(),
  };
  const state = ref(initialState);

  const addTransaction = async () => {
    await supabase
      .from("transactions")
      .upsert({
        description: state.value.description,
        category: state.value.category,
        amount: state.value.amount,
        date: state.value.date,
      })
      .select();
  };

  return { state, addTransaction };
};
