<template>
  <div class="black pok-fill--all pa-4">
    <v-layout row wrap>
      <v-flex xs4>
        <v-text-field
          class="pok-input-text mini mb-2" 
          name="password" 
          label="Team Name"
          box 
          hide-details />
      </v-flex>
      <v-flex xs8 text-xs-right py-3>
        <span class="white--text mx-2"><i class="fas fa-trash mr-1" />DELETE</span>
        <span class="white--text mx-2"><i class="fas fa-save mr-1" />SAVE</span>
      </v-flex>

    </v-layout>

  </div>
</template>

<script>
export default {
  
}
</script>

