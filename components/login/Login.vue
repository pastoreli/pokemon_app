<template>
  <div v-show="show == true" class="pok-dialog">
    <div class="pok-dialog-content pok-primary-brand pok-round-3">
      <a class="fas fa-times white--text pok-text--h2 btn-close" @click="close()"></a>
      <div class="form-login">
        <div class="form-login-wrapper white pok-round-3">
          <div class="form-login-icon pok-shadow--1">
            <div class="form-login-icon-img"></div>
          </div>
          <div class="form-login-content">
            <sign-in></sign-in>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SignIn from './forms/SignIn';

export default {
  components: {
    SignIn
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
    }
  }
}
</script>
