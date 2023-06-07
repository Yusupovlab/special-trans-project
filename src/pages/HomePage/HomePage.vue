<template>
  <div class="home-page">
<HeroSection />
<Services/>

  </div>
</template>

<script>

import HeroSection from "./sections/HeroSection.vue";
import Services from './sections/ServicesSection.vue';

export default { 
    components: {  HeroSection, Services } };
</script>
