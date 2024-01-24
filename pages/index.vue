<template>
  <section class="mt-7">
    <div class="text-center space-y-4">
      <h1>Controle as suas finanças de forma inteligente.</h1>
      <p>
        Desenvolvemos um software que é capaz de fazer voce reduzir custos de
        forma milagrosa.
      </p>
      <UButton>Começar</UButton>
    </div>
    <section class="mt-7">
      <div class="text-center space-y-4">
        <h1>Por que escolher a gente?</h1>
        <p>
          Quando a vida se torna cheia de coisas demais e você precisa controlar
          os gastos, deixe a WiseHub facilitar sua vida com um sistema
          inteligente do controle do seu dinheiro.
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center space-x-4 mt-4"
      >
        <home-card
          v-for="card in cardLinks"
          :key="card.title"
          :card="card"
        ></home-card>
      </div>
    </section>
    <div class="text-center space-y-4">
      <h2>Comece com apenas 3 passos.</h2>
      <p>
        Seja um cliente WiseHub da maneira mais simples, rápida e precisa. Não
        vai demorar muito para vivenciar os nossos serviços.
      </p>
      <h3>Passo 1: Crie a sua conta</h3>
      <p>
        Criar sua própria conta no WiseHub é fácil e gratuito. Basta conectar-se
        com e-mail.
      </p>
      <h3>Passo 2: Confirme a sua conta pelo e-mail</h3>
      <p>
        Após criar a conta é necessário confirma-la no seu endereço de e-mail.
      </p>
      <h3>Passo 3: Tudo pronto!</h3>
      <p>A partir de agora voce já está pronto para usar o WiseHub!</p>
    </div>

    <div class="text-center space-y-4">
      <h1>Benefícios que o WiseHub fornece.</h1>
      <p>
        Desenvolvemos um software que é capaz de fazer voce reduzir custos de
        forma milagrosa.
      </p>

      <div class="flex flex-col md:flex-row gap-4">
        <description-card
          v-for="card in descriptionlinks"
          :card="card"
        ></description-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cardLinks from "~/constants/card-links";
import descriptionlinks from "~/constants/description-links";
</script>
