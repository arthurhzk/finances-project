<template>
  <div>
    <UButton
      icon="i-heroicons-plus-20-solid"
      color="gray"
      variant="outline"
      aria-label="Add"
      @click="isOpen = true"
    />

    <UModal v-model="isOpen">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <h2>Adicionar transação</h2>
        </template>

        <div space-y-4>
          <UFormGroup label="Quantidade:">
            <UInput
              v-model="state.quantity"
              type="number"
              icon="i-heroicons-banknotes"
            />
          </UFormGroup>
          <UFormGroup label="Tipo:">
            <USelect v-model="state.type" :options="transactionTypes" />
          </UFormGroup>
          <UFormGroup label="Descrição:">
            <UInput
              v-model="state.description"
              type="text"
              icon="i-heroicons-pencil-square"
            />
          </UFormGroup>
        </div>

        <template #footer>
          <div class="flex justify-end">
            <UButton
              color="gray"
              variant="outline"
              label="Adicionar"
              @click="confirmTransaction"
            />
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
const isOpen = ref(false);
import TransactionEnum from "~/enums/transactionEnum.ts";

const { state, addTransaction } = useAddTransactions();
const { fetchTransactions } = useTransactions();
const confirmTransaction = async () => {
  await addTransaction();
  await fetchTransactions();
  isOpen.value = false;
};
const transactionTypes = [
  TransactionEnum.AMOUNT,
  TransactionEnum.INVESTMENTS,
  TransactionEnum.GAINS,
  TransactionEnum.EXPENSES,
];
</script>
