<template>
  <UCard>
    <template #header> Faça o login no WiseHub </template>
    <UForm :schema="schema" :state="state" class="space-y-4">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>
      <UButton @click="signInUser" class="text-white"> Acessar </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { useUserStore } from "~/store/user";

const { signInUser, state, isLoading } = useUserStore();

const schema = z.object({
  email: z.string().email("Email invalido!"),
  password: z.string().min(8, "Deve possuir pelo menos 8 caracteres!"),
});

type Schema = z.output<typeof schema>;
</script>
