<template>
  <v-form class="px-4 py-4 pb-0 text-center">
    <h2 class="mb-4">Sign In</h2>
    <v-text-field 
      v-model="form.username" 
      class="pok-input-text mb-2" 
      name="username" 
      label="Username" 
      type="email" 
      box 
      hide-details />
    <v-text-field 
      v-model="form.password" 
      class="pok-input-text mb-2" 
      name="password" 
      label="Password" 
      type="password" 
      box 
      hide-details />
    <a 
      class="d-block text-left black--text pok-text--underline pok-text--h6"
      @click="signUp()">Create an account</a>
    <!-- <a class="d-block text-right">Forgot Password</a> -->
    <v-btn 
      color="pok-secundary-brand black--text min-width--x2" 
      class="pok-round my-4 ml-0"
      @click="sendForm(form)">
      Login
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    sendForm( form ) {
      this.$emit('signIn', form)
    },
    signUp() {
      this.$emit('changePage', 'signup')
    }
  }
}
</script>

