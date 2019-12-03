<template>
  <div id="app"> 
    <NavBar />
    <b-container>
      <b-row ><b-button class="button" v-if='!display' @click='display = true' variant="outline-primary">Back</b-button></b-row>
      <b-row ><b-button class="button" v-if='display' @click='display = false' variant="outline-primary"> Clients</b-button></b-row>
    </b-container>
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

.button {
  margin: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto
}


</style>
