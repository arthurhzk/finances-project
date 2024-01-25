import supabase from "~/lib/supabase";
import { ref } from "vue";

export const useAddTransactions = () => {
  const initialState = {
    description: undefined,
    type: undefined,
    quantity: null,
    date: new Date(),
  };
  const state = ref(initialState);

  const addTransaction = async () => {
    await supabase
      .from("transactions")
      .upsert({
        descriçao: state.value.description,
        tipo: state.value.type,
        quantidade: state.value.quantity,
        data: state.value.date,
      })
      .select();
  };

  return { state, addTransaction };
};
