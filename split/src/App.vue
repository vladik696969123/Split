<template>
  <div id="app">
  <router-view></router-view>
    <FooterComponent /> 
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<script>
 import FooterComponent from './components/FooterComponent.vue';


export default {
  components: {
     FooterComponent,
  },
};
</script>