<template>
  <v-app class="pok-primary-brand overflow-hidden">
    <tool-bar />
    <v-content class="pa-4">
      <v-container class="pok-page px-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import ToolBar from '@/components/partials/ToolBar';

export default {
  components: {
    ToolBar
  }
}
</script>
