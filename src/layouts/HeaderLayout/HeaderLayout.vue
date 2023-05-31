<template>
  <header class="header fixed top-0 w-full">
    <div class="container flex items-center">
      <HeaderLogo />
      <HeaderMenu />
      <HeaderAction />
    </div>
  </header>
</template>
<script>
import HeaderAction from "./components/HeaderAction.vue";
import HeaderLogo from "./components/HeaderLogo.vue";
import HeaderMenu from "./components/HeaderMenu.vue";

export default {
  components: { HeaderLogo, HeaderMenu, HeaderAction },
};
</script>
