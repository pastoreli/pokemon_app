<template>
  <div class="pok-third-brand pok-fill--all pa-4">
    <div v-if="pokemon">
      <v-layout row wrap class="pok-third-brand--light pok-round">
        <v-flex xs3>
          <img :src="pokemon.sprite" />
          <label class="white--text pok-text--h1">{{pokemon.name}}</label>
        </v-flex>
        <v-flex xs3>
          <div>
            <label class="white--text pok-text--h4">Tipo</label>
            <div class="pok-chip-container">
              <div v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'ma-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6">{{type.name}}</span>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pokemon: {
      required: true,
      type: Object,
      default: null
    }
  }
}
</script>

