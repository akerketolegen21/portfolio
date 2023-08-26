<template>
  <Intro />
  <Menu />
</template>
<script>
import Intro from './components/Intro.vue'
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Intro,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Syne';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #efd9ce;
  margin-top: 60px;
  background-color: #25283d;
}
</style>
