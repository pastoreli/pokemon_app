<template>
  <div class="pok-fill--all pok-team">
    <v-layout row wrap class="pok-fill--all">
      <v-flex xs3 px-1 class="pok-fill--all">
        <team-list />
      </v-flex>
      <v-flex xs9 px-1 class="pok-fill--all">
        <team-profile :items="pokemonList" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon';

//components
import TeamList from '@/components/team/TeamList';
import TeamProfile from '@/components/team/profile';

export default {
  components: {
    TeamList,
    TeamProfile,
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
