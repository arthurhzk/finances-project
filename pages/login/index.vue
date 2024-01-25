<template>
  <UCard>
    <template #header> Faça o login no WiseHub </template>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit"> Acessar </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useUserStore } from "~/store/user";

const { signInUser, state } = useUserStore();

const schema = z.object({
  email: z.string().email("Email invalido!"),
  password: z.string().min(8, "Deve possuir pelo menos 8 caracteres!"),
});

type Schema = z.output<typeof schema>;

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
  await signInUser();
}
</script>
