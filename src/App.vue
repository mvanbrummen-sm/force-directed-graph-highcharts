<template>
  <JwtVisualiser/>
</template>

<script>
import JwtVisualiser from './components/JwtVisualiser.vue'

export default {
  name: 'App',
  components: {
    JwtVisualiser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
