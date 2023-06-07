<template>
  <section class="hero min-h-screen bg bg-right lg:bg-center flex items-end py-5 md:items-center">
    <div class="container">
      <div class="block max-w-3xl relative">
        <div class="bg-layer w-full h-full bg-[#878787] opacity-50 blur-[100px] absolute left-0 top-0"></div>
        <h1 class="title relative  text-3xl leading-9 text-white font-bold md:text-6xl">
          Продажа и доставка нерудных материалов
        </h1>
        <p
          class="subtitle relative text-white md:text-xl leading-5 my-4 lg:mt-8 lg:mb-16"
        >
          У нас вы можете заказать материалы премиального качества.
          Индивидуальный подход и качественная продукция – ключевые преимущества
          нашей компании.
        </p>
        <TheButton class="relative">Заказать звонок</TheButton>
      </div>
    </div>
  </section>
</template>
<script>
import TheButton from "../../../ui/TheButton.vue";

export default {
  components: { TheButton },
};
</script>

<style>
.hero {
  background-image: url(../../../assets/images/hero-bg.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
