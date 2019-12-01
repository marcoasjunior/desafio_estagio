<template>
  <div id="app">
    <NavBar />
    <Form/>
  </div>
</template>

<script>
import Form from './components/Form.vue'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    Form,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



</style>
