<template>
  <div id="app">
  <router-view></router-view>
    <FooterComponent /> 
  </div>
</template>

<script>
 import FooterComponent from './components/FooterComponent.vue';


export default {
  components: {
     FooterComponent,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

:root{
  --bg: #1e2a4d;
  --footer-bg: #13273f;
  --card-bg: rgba(255,255,255,0.98);
  --muted: rgba(255,255,255,0.85);
}

body {
  background-color: #0a0f14; /* глибокий чорний з легким синім відтінком */
  color: #e5e7eb;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  background-color: #0a0f14;
  min-height: 100vh;
}

*{ box-sizing: border-box; }
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--bg);
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--muted);
}
</style>