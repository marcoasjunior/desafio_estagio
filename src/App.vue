<template>
  <div id="app"> 
    <NavBar />
    <b-button v-if='!display' @click='display = true' variant="outline-primary">Voltar para página anterior</b-button>
    <b-button v-if='display' @click='display = false' variant="outline-primary">Ir para página de clientes</b-button>
    <Form @changeDisplay='display = false' v-if='display'/>
    <Display v-if='!display' />
  </div>
</template>

<script>
import Form from './components/Form.vue'
import NavBar from './components/NavBar'
import Display from './components/Display'

export default {
  name: 'app',
  data() {
      return {
        display: true    
      }
    },
  components: {
    Form,
    NavBar,
    Display
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
