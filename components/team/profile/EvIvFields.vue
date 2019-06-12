<template>
  <v-layout row wrap pa-0>
    <v-flex xs3>
      <label v-if="hasLabel" class="white--text pok-text--h4" >EVs</label>
      <v-text-field
        v-model="formData.EV"
        class="pok-input opt--dark mini mb-2 no-label" 
        name="evs" 
        box 
        hide-details
        @input="emitChanges()" />
    </v-flex>
    <v-flex xs6 px-3>
      <v-slider
        v-model="formData.EV"
        color="white"
        track-color="white"
        thumb-color="pok-primary-brand"
        max="250"
        always-dirty
        :style="`margin-top: ${hasLabel? '30' : '5'}px`"
        @change="emitChanges()" />
    </v-flex>
    <v-flex xs3>
      <label v-if="hasLabel" class="white--text pok-text--h4" >IVs</label>
      <v-text-field
        v-model="formData.IV"
        class="pok-input opt--dark mini mb-2 no-label" 
        name="pokemon" 
        box 
        hide-details
        @input="emitChanges()" />
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
    },
    data: {
      required: false,
      type: Object,
      default: null
    }
  },
  data() {
    return {
      formData: {
        EV: this.data? this.data.EV || 0 : 0,
        IV: this.data? this.data.IV || 0 : 0
      }
    }
  },
  methods: {
    reload() {
      this.formData.EV = this.data? this.data.EV || 0 : 0
      this.formData.IV = this.data? this.data.IV || 0 : 0
    },
    emitChanges() {
      this.$emit('change', this.formData)
    }
  } 
}
</script>



