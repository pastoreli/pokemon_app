<template>
  <v-form class="pa-4 text-center">
    <h2 class="mb-4">Sign Up</h2>
    <v-text-field 
      v-model="form.username" 
      class="pok-input mini mb-2" 
      name="username" 
      label="Username" 
      type="email" 
      box 
      hide-details />
    <v-text-field 
      v-model="form.email" 
      class="pok-input mini mb-2" 
      name="email" 
      label="E-mail" 
      type="email" 
      box 
      hide-details />
    <v-text-field 
      v-model="form.password" 
      class="pok-input mini mb-2" 
      name="password" 
      label="Password" 
      type="password" 
      box 
      hide-details />
    <v-text-field 
      v-model="confirmPassword" 
      class="pok-input mini mb-2" 
      name="repeat_password" 
      label="Repeat Password" 
      type="password" 
      box 
      hide-details />
    <a 
      class="pok-text--h6 d-block text-right black--text pok-text--underline"
      @click="signIn()">
      Have an account? <label class="font-weight-bold">Sign-in</label> 
    </a>
    <!-- <a class="d-block text-right">Forgot Password</a> -->
    <v-btn 
      color="pok-secundary-brand black--text min-width--x2" 
      class="pok-round my-4 ml-0"
      @click="sendForm(form)">
      Register
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: null,
        email: null,
        password: null,
      },
      confirmPassword: null
    }
  },
  methods: {
    sendForm( form ) {
      this.$emit('signUp', form)
    },
    signIn() {
      this.$emit('changePage', 'signin')
    }
  }
}
</script>

