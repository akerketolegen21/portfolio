<template>
  <Intro />
  <Menu />
  <Work />
</template>
<script>
import Intro from './components/Intro.vue'
import Menu from './components/Menu.vue'
import Work from './components/Work.vue'
export default {
  name: 'App',
  components: {
    Intro,
    Menu,
    Work
  }
}
</script>

<style>
body {
  font-family: 'Syne';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #efd9ce;
  margin-top: 60px;
  background-color: #25283d;
  background-image: url("assets/bg.png");
}
</style>
