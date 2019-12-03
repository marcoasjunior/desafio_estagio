
<template>
  <div>
    <div>
      <b-row>
        <b-button class="button" v-if='!display' @click='refresh' variant="outline-primary">Refresh</b-button>
      </b-row>
      <b-card-group deck>
        <b-card v-for="(client, index) in clients" :key='index' :title="client.name" :img-src="client.file"
          img-alt="Image" img-top class="overflow-hidden" style="max-width: 300px;">
          <b-card-text>
            E-mail: {{client.email}}
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
  export default {
    data() {
      return {
        image: null,
        name: null,
        email: null,
        clients: null,
        api: 'http://localhost:3000/clients'

      }
    },

    methods: {
      refresh() {
        this.axios.get(this.api)
          .then(response => {
            this.clients = response.data
            console.log(this.clients)
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    mounted() {
      this.axios.get(this.api)
        .then(response => {
          this.clients = response.data
          console.log(this.clients)
        })
        .catch(e => {
          console.log(e)
        })
    },

}
</script>

<style scoped>

</style>