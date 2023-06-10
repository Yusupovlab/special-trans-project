<template>
  <div class="home-page">
<HeroSection />
<Services/>
<MainMaterialsSection/>
  </div>
</template>

<script>

import HeroSection from "./sections/HeroSection.vue";
import MainMaterialsSection from './sections/MainMaterialsSection.vue';
import Services from './sections/ServicesSection.vue';

export default { 
    components: {  HeroSection, Services, MainMaterialsSection } };
</script>
