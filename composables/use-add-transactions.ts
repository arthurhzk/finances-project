import supabase from "~/lib/supabase";
import { ref } from "vue";
import { type Finances } from "~/types/finances";
export const useAddTransactions = () => {
  const initialState = [
    {
      description: undefined,
      type: undefined,
      quantity: null,
      date: new Date(),
    },
  ];
  const state = ref<Finances[]>(initialState);

  const addTransaction = async () => {
    const { data, error } = await supabase
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
