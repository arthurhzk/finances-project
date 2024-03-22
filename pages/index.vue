<template>
  <section class="mt-7">
    <div class="text-center space-y-4">
      <h1
        class="text-center text-green-500 font-semibold text-3xl md:text-6xl leading-relaxed"
      >
        Controle as suas finanças de forma inteligente
      </h1>
      <p :class="getParagraphStyle">
        Desenvolvemos um software que é capaz de fazer voce reduzir custos de
        forma milagrosa.
      </p>
    </div>
    <section class="mt-7">
      <div class="text-center space-y-4">
        <h1
          class="text-center text-green-500 font-semibold text-3xl md:text-6xl leading-relaxed"
        >
          Por que escolher a gente?
        </h1>
        <p :class="getParagraphStyle">
          Quando a vida se torna cheia de coisas demais e você precisa controlar
          os gastos, deixe a WiseHub facilitar sua vida com um sistema
          inteligente do controle do seu dinheiro.
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center space-x-4 mt-4"
      >
        <home-card
          class="observe"
          v-for="card in cardLinks"
          :key="card.title"
          :card="card"
        ></home-card>
      </div>
    </section>
    <div class="text-center space-y-4">
      <h2
        class="text-center text-green-500 font-semibold text-3xl md:text-4xl leading-relaxed tracking-tight mt-6"
      >
        Comece com apenas 3 passos
      </h2>
      <p :class="getParagraphStyle">
        Seja um cliente WiseHub da maneira mais simples, rápida e precisa. Não
        vai demorar muito para vivenciar os nossos serviços.
      </p>
      <h3 class="text-center text-green-500 font-semibold text-2xl leading-8">
        Passo 1: Crie a sua conta
      </h3>
      <p :class="getParagraphStyle">
        Criar sua própria conta no WiseHub é fácil e gratuito. Basta conectar-se
        com e-mail.
      </p>
      <h3 class="text-center text-green-500 font-semibold text-2xl leading-8">
        Passo 2: Confirme a sua conta pelo e-mail
      </h3>
      <p :class="getParagraphStyle">
        Após criar a conta é necessário confirma-la no seu endereço de e-mail.
      </p>
      <h3 class="text-center text-green-500 font-semibold text-2xl leading-8">
        Passo 3: Tudo pronto!
      </h3>
      <p :class="getParagraphStyle">
        A partir de agora voce já está pronto para usar o WiseHub!
      </p>
    </div>

    <div class="text-center space-y-4">
      <h2
        class="mt-12 text-center text-green-500 font-semibold text-4xl leading-relaxed tracking-tight"
      >
        Benefícios que o WiseHub fornece
      </h2>
      <p :class="getParagraphStyle">
        Desenvolvemos um software que é capaz de fazer voce reduzir custos de
        forma milagrosa.
      </p>

      <div class="flex flex-col md:flex-row gap-4">
        <description-card
          class="observe"
          v-for="card in descriptionlinks"
          :card="card"
        ></description-card>
      </div>
    </div>

    <div class="text-center space-y-6 mt-7">
      <h2
        class="mt-12 text-center text-green-500 font-semibold text-4xl leading-relaxed tracking-tight"
      >
        Nossos parceiros
      </h2>
      <p :class="getParagraphStyle">
        Otimizando a economia das melhoras empresas do mercado
      </p>
      <div
        class="flex flex-col items-center mx-auto justify-center lg:flex-row gap-8"
      >
        <img class="observe" v-for="image in brandImages" :src="image.path" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cardLinks from "~/constants/card-links";
import descriptionlinks from "~/constants/description-links";
import brandImages from "~/constants/brand-images";
import { computed } from "vue";

useHead({
  title: `WiseHub - Controle suas finanças de forma inteligente`,
});
const getParagraphStyle = computed(() => {
  return "text-center dark:text-slate-200 leading-6 tracking-tighter";
});

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  const elementsToWatch = document.querySelectorAll(".observe");
  elementsToWatch.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.observe {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 1s, transform 1s;
}

.observe.visible {
  opacity: 1;
  transform: scale(1);
}
</style>
