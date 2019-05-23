<template>
  <v-layout row wrap class="pok-team-tab">
    <v-flex v-for="pokemon in getPokemonList" :key="pokemon._id" xs2 class="pok-team-tab-item">
    </v-flex>
    <v-flex v-if="pokemonList.length < 6" xs2 text-xs-center :class="['pok-team-tab-item pok-third-brand--light']">
      <div class="text-center-vertical--force">
        <span class="white--text"><i class="fas fa-plus" /> ADD TEAM</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    pokemonList: {
      required: false,
      type: Array,
      default: () => []
    }
  },
  computed: {
    getPokemonList () {
      return this.pokemonList
    }
  }
}
</script>

