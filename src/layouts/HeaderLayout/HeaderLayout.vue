<template>
  <header
    class="header fixed top-0 z-50 w-full  transition-all "
    :class="isScrolled? 'header-scrolled lg:pt-0  ' : 'lg:pt-8 '"
  >
    <div class="container flex items-center">
      <HeaderLogo />
      <HeaderMenu  />
      <HeaderAction @openMenu="toggleMenu" :scrolled="isScrolled"/>
    </div>
  </header>
  <Transition name="menu">
    <HiddenMenu class="z-50" v-if="isOpen" @closeMenu="toggleMenu" />
  </Transition>
</template>
<script>
import HeaderAction from "./components/HeaderAction.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import HiddenMenu from "./components/HiddenMenu.vue";

export default {
  components: { HeaderLogo, HeaderMenu, HeaderAction, HiddenMenu },
  data() {
    return {
      isOpen: false,
      isScrolled: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted(){
    window.addEventListener('scroll',()=>{
      if(window.scrollY){
        this.isScrolled = true
      }else( this.isScrolled = false)
    })
  }

};
</script>
<style>
.menu-enter-active,
.menu-leave-active {
  transition: 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateX(100%) translateY(-100%);
}
.header-scrolled {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);


}
</style>
