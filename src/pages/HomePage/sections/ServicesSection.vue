<template>
  <section class="services py-16 md:py-20">
    <div class="container">
      <TheTitle>Почему выбирают нас</TheTitle>
      <div class="wrapper lg:mt-16 mt-6 flex justify-between gap-3 flex-wrap   lg:flex-nowrap">
        <ServicesCard v-for="item in servicesItems" :key="item">
          <template #icon
            ><img :src="item.icon" alt="services-icon"
          /></template>
          <template #text><p v-html="item.name"></p></template>
        </ServicesCard>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from "../../../ui/TheTitle.vue";
import ServicesCard from "../components/ServicesCard.vue";

export default {
  components: { TheTitle, ServicesCard },
data(){
  return{
    servicesItems:[
      {
        icon: 'src/assets/icons/services-icon-1.svg',
        name: 'Мы работаем с <span class="text-brand">2000</span> года'
      },
      {
        icon: 'src/assets/icons/services-icon-2.svg',
        name: 'Более <span class="text-brand">5000</span> счастливых клиентов'
      },
      {
        icon: 'src/assets/icons/services-icon-3.svg',
        name: 'Лучшие цены'
      },
      {
        icon: 'src/assets/icons/services-icon-4.svg',
        name: 'Качественная продукция'
      },
      {
        icon: 'src/assets/icons/services-icon-5.svg',
        name: 'Оперативность'
      },
    ]
  }
}
};
</script>

<style></style>
