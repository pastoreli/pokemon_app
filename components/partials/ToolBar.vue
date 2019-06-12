<template>
  <v-toolbar fixedapp class="pok-tool-bar pok-shadow--none transparent">
    <img draggable="false" class="line-header" :src="require(`~/assets/images/header-line.svg`)" />

    <div class="header-content px-3">
      <v-layout row wrap class="items-left">
        <v-flex xs3 class="px-2">
          <span class="round-icon big-icon pok-shadow--1 center-item"></span>          
          <span class="round-icon pok-danger pok-shadow--1 mx-1"></span>
          <span class="round-icon pok-alert pok-shadow--1 mx-1"></span>
          <span class="round-icon pok-success pok-shadow--1 mx-1"></span>
        </v-flex>
        <v-flex xs6 class="text-center">
          <v-btn color="pok-third-brand white--text" class="pok-round-2 min-width my-4" to="/">Pokedex</v-btn>
          <v-btn v-if="token" color="pok-third-brand white--text" class="pok-round-2 min-width my-4" to="/team">Teams</v-btn>
        </v-flex>
        <v-flex xs3 class="text-right">
          <v-btn v-if="token" color="pok-secundary-brand black--text" class="pok-round my-4 ml-0" @click="logout()">Logout</v-btn>
          <div v-else>
            <v-btn color="white--text" class="my-4 mx-0 transparent" @click="callLogin('signin')">Sign IN</v-btn>
            <v-btn color="pok-secundary-brand black--text" class="pok-round my-4 ml-0" @click="callLogin('signup')">Sign UP</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>
        
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    callLogin(page) {
      this.$nuxt.$emit('showLogin', {show: true, page: page});
      this.teste
    },
    logout() {
      this.$store.dispatch('removeToken')
    }
  },
  data () {
    return {
      teste: '',
      token: this.$store.state.auth.token || null
    }
  },
  watch: {
    '$store.state.auth.token': function () {
      this.token = this.$store.state.auth.token || null
    }
  }
}
</script>

