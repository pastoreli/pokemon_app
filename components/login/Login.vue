<template>
  <div v-show="show == true" class="pok-dialog">
    <div class="pok-dialog-content pok-primary-brand pok-round-3">
      <a class="fas fa-times white--text pok-text--h2 btn-close" @click="close()"></a>
      <div class="form-login">
        <div :class="['form-login-wrapper white pok-round-3', page]">
          <div class="form-login-icon pok-shadow--1">
            <div class="form-login-icon-img"></div>
          </div>
          <div class="form-login-content">
            <sign-up 
              v-if="page === 'signup'" 
              @signUp="signUp" 
              @changePage="changePage"></sign-up>
            <sign-in 
              v-else 
              @signIn="signIn" 
              @changePage="changePage"></sign-in>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

//API
import AuthAPI from '@/API/auth';
import UserAPI from '@/API/user';

//components
import SignIn from './forms/SignIn';
import SignUp from './forms/SignUp';

export default {
  components: {
    SignIn,
    SignUp
  },
  props: {
    show: {
      required: false,
      type: Boolean,
      default: false
    },
    page: {
      required: false,
      type: String,
      default: 'signin'
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async signIn( data ) {

      await AuthAPI.signIn( data ).then(res => {
        console.log('ress', res)

        this.$store.dispatch('setToken', res)
        localStorage.setItem('accessToken', res)

        this.close()

      }).catch(error =>  {

      })
    },
    async signUp( data ) {
      await UserAPI.createUser( data ).then(res => {
        console.log('ress', res)

        this.$store.dispatch('setToken', res)
        localStorage.setItem('accessToken', res)

        this.close()

      }).catch(error =>  {

      })
    },
    changePage( data ) {
      this.$emit('changePage', data)
    }
  }
}
</script>