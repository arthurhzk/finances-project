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
          <Placeholder class="h-8" />
          <h2>Adicionar transação</h2>
        </template>

        <Placeholder class="h-32" />
        <div space-y-4>
          <UFormGroup label="Quantidade:">
            <UInput
              v-model="state.quantity"
              type="number"
              icon="i-heroicons-banknotes"
            />
          </UFormGroup>
          <UFormGroup label="Tipo:">
            <UInput
              v-model="state.type"
              type="text"
              icon="i-heroicons-chat-bubble-bottom-center"
            />
          </UFormGroup>
          <UFormGroup label="Descrição:">
            <UInput
              v-model="state.description"
              type="text"
              icon="i-heroicons-pencil-square"
            />
          </UFormGroup>
          <UFormGroup v-model="state.status" label="Status:">
            <UInput type="text" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <template #footer>
          <Placeholder class="h-8" />
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

const { state, addTransaction } = useAddTransactions();

const confirmTransaction = async () => {
  await addTransaction();
  isOpen.value = false;
};
</script>
