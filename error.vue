<template>
  <div>
    <TheNav />

    <UContainer>
      <UMain>
        <UPage>
          <UPageError
            :status="404"
            name="Página não encontrada"
            message="A página que você está procurando não existe."
          />
        </UPage>
      </UMain>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();
</script>
