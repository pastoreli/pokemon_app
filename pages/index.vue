<template>
  <div class="pok-fill--all">
    <v-layout row wrap class="pok-fill--all">
      <v-flex xs4 px-1 class="pok-fill--all">
        <pokemon-list :items="pokemonList" @choosePokemon="searchPokemon" />
      </v-flex>
      <v-flex xs8 px-1 class="pok-fill--all">
        <pokemon-detail :pokemon="choosedPokemon || null" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon';

//components
import PokemonList from '@/components/partials/PokemonList';
import PokemonDetail from '@/components/partials/PokemonDetail';

export default {
  components: {
    PokemonList,
    PokemonDetail,
  },
  async mounted() {
    await this.getListPokemon(0)
  },
  data() {
    return {
      pokemonList: [],
      choosedPokemon: null,
    }
  },
  methods: {
    async getListPokemon(page = 0){
      await PokemonAPI.getAllPokemon(page)
      .then(res => {
        this.pokemonList.push(...res.content);
        if( res.next !== null ) {
          this.getListPokemon(page+1);
        }
      }).catch(error => console.log('error', error));
    },
    async searchPokemon(id) {
      this.choosedPokemon = await PokemonAPI.getPokemonById(id);
    }
  },
}
</script>
