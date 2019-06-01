<template>
  <v-layout row wrap pa-0>
    <v-flex xs3>
      <label v-if="hasLabel" class="white--text pok-text--h4" >EVs</label>
      <v-text-field
        class="pok-input opt--dark mini mb-2 no-label" 
        name="pokemon" 
        box 
        hide-details />
    </v-flex>
    <v-flex xs6 px-3>
      <v-slider
        v-model="slider"
        color="white"
        track-color="white"
        thumb-color="pok-primary-brand"
        always-dirty
        :style="`margin-top: ${hasLabel? '30' : '5'}px`" />
    </v-flex>
    <v-flex xs3>
      <label v-if="hasLabel" class="white--text pok-text--h4" >IVs</label>
      <v-text-field
        class="pok-input opt--dark mini mb-2 no-label" 
        name="pokemon" 
        box 
        hide-details />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    hasLabel: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>



