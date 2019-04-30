<template>
  <v-layout row wrap  class="pok-fill--all">
    <v-flex xs4 px-1>
      <pokemon-list />
    </v-flex>
    <v-flex xs8 px-1>
      <pokemon-detail />
    </v-flex>
  </v-layout>
</template>

<script>
import PokemonList from '@/components/partials/PokemonList';
import PokemonDetail from '@/components/partials/PokemonDetail';
export default {
  components: {
    PokemonList,
    PokemonDetail
  }
}
</script>
