
<template>
  <div>
    <div >
        <b-card
            v-for="client in clients" 
            :key='clients'
            :title="client.name"
            :img-src="client.image"
            img-alt="Image"
            img-top
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            {{email}}
            </b-card-text>

        </b-card>
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
          clients: null
   
      }
    },

    methods: {
      
  },

    created() {
        let api = 'http://localhost:3000/clients'
        
        this.axios.get(api)
            .then(response => {
        this.clients = response.data
        console.log(this.clients)
      })
            .catch(e => {
                      console.log(e)
                  })

    }

}
</script>

<style scoped>

</style>