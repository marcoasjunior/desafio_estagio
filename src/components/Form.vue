<template>
  <div>
    <b-container class="box shadow p-3 mb-5 bg-white rounded">
      <b-navbar class="nav" type="light" variant="light">
        <b-navbar-brand tag="h1" class="mb-0">Credentials</b-navbar-brand>
      </b-navbar>
      <div id="preview">
            <b-img  v-show="url" :src="url" fluid />
        </div>
      <b-form @submit="onSubmit" @reset="onReset">  
        <b-form-group id="input-group-1" label="Enter Image:" label-for="input-0">      
            <b-form-file
                class="img"
                v-model="file"
                :state="Boolean(file)"
                placeholder="Image"
                name='avatar'
                ref="fileInput"
                @change="onFileChange($event)"
                required 
                capture 
                accept="image/*,.pdf"
                ></b-form-file>
        </b-form-group>
        <b-form-group id="input-group-1" label="Email Address:" label-for="input-1">
          <b-form-input id="input-1" v-model="email" type="email" required placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="name" required placeholder="Enter name"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Your Password:" label-for="input-3">
          <b-form-input id="input-2" v-model="passwordOne" required placeholder="Enter password"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Repeat your Password" label-for="input-3">
          <b-form-input id="input-2" v-model="passwordTwo" required placeholder="Enter password"></b-form-input>
        </b-form-group>
        <b-button disabled v-show="!show" class="button" type="submit" variant="primary">Submit</b-button>
        <b-button v-show="show" class="button" type="submit" variant="primary">Submit</b-button>
        <b-button class="button" type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        url: null,
        email: '',
        name: '',
        show: false,
        passwordOne: '',
        passwordTwo: '',
        errors: Array,
        response: null
      }
    },

    watch: {
      passwordTwo: function (value) {
        value && this.passwordOne == '' ? this.show = false : value == this.passwordOne ? this.show = true : this.show = false
      }
    },

    methods: {

      onFileChange(e) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                this.file  = file
            },

      onSubmit(evt) {
        evt.preventDefault()
        let api = ''

        // configurações do header

        const config = {
                header: {
                    'Content-Type': 'multipart/form-data'
                }
            }

        // formulario 

        const formData = new FormData()
            formData.append('file', this.newFile)
            this.putResponse = formData

        // post de cadastro

        this.axios.post(api, formData, config)
          .then(response => this.response = response)
          .catch(e => {
                    this.errors.push(e)
                })
      },

      onReset(evt) {
        evt.preventDefault()
        this.email = ''
        this.name = ''
        this.passwordOne = ''
        this.passwordTwo = ''

      }
    }
  }
</script>

<style scoped>
  .box {
    margin-top: 50px
  }

  .button {
    margin: 5px;
  }

  .nav {
    margin-bottom: 10px
  }

  .img {
    margin-bottom: 10px
  }
</style>