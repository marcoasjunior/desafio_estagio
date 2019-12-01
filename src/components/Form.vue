<template>
  <div>
    <b-container class="box shadow p-3 mb-5 bg-white rounded">
      <b-navbar class="nav" type="light" variant="light">
        <b-navbar-brand tag="h1" class="mb-0">Credentials</b-navbar-brand>
      </b-navbar>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Email Address:" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
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
        form: {
          email: '',
          name: '',
          

        },
        show: false,
        passwordOne: '',
        passwordTwo: '',
      }
    },

    watch: {
      passwordTwo: function (value) {
         value && this.passwordOne == '' ? this.show = false : value == this.passwordOne ? this.show = true : this.show = false 

      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
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
</style>