<template>
  <v-layout row wrap class="pok-fill--all">
    <v-flex xs4 px-1 class="pok-fill--all">
      <pokemon-list :items="pokemonList" @choosePokemon="searchPokemon" />
    </v-flex>
    <v-flex xs8 px-1 class="pok-fill--all">
      <pokemon-detail :pokemon="choosedPokemon" />
    </v-flex>
  </v-layout>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon';

import PokemonList from '@/components/partials/PokemonList';
import PokemonDetail from '@/components/partials/PokemonDetail';
export default {
  components: {
    PokemonList,
    PokemonDetail
  },
  async mounted() {
    this.pokemonList = await PokemonAPI.getAllPokemon();
  },
  data() {
    return {
      pokemonList: [],
      choosedPokemon: null,
    }
  },
  methods: {
    async searchPokemon(id) {
      this.choosedPokemon = await PokemonAPI.getPokemonById(id);
    }
  },
}
</script>
