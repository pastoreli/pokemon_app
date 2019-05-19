<template>
  <v-app class="pok-primary-brand overflow-hidden">
    <login :show="loginProps.show" :page="loginProps.page" @close="loginProps.show = false" />
    <tool-bar />
    <v-content class="pa-4">
      <v-container class="pok-page px-0">
        <div class="pok-fill--all pa-4">
          <nuxt />
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import ToolBar from '@/components/partials/ToolBar';

//components
import Login from '@/components/login/Login';

export default {
  components: {
    Login,
    ToolBar
  },
  data () {
    return {
      //login
      loginProps: {
        show: false,
        page: ''
      }
    }
  },
  mounted() {
    this.$nuxt.$on('showLogin', data => {
      this.loginProps = data;
    });
  }
}
</script>
