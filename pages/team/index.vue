<template>
  <div class="pok-fill--all pok-team">
    <v-layout row wrap class="pok-fill--all">
      <v-flex xs3 px-1 class="pok-fill--all">
        <team-list 
          :teams="teamListAux" 
          :livePokemon="teamData" 
          @editTeam="editTeam" />
      </v-flex>
      <v-flex xs9 px-1 class="pok-fill--all">
        <team-profile 
          ref="teamProfile" 
          :items="pokemonList" 
          @liveChange="(data) => teamData = data"
          @update="updateList" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon';
import TeamAPI from '@/API/team';

//components
import TeamList from '@/components/team/TeamList';
import TeamProfile from '@/components/team/profile';

export default {
  components: {
    TeamList,
    TeamProfile,
  },
  async mounted() {
    await this.getTeams()
    this.teamListAux = this.teamList
    await this.getListPokemon()
  },
  data() {
    return {
      teamList: [],
      teamListAux: [],
      pokemonList: [],
      choosedPokemon: null,
      selectedTeam: null,
      teamData: null
    }
  },
  methods: {
    async getTeams(page = 0) {
      await TeamAPI.getAllTeams(page)
      .then(res => {
        this.teamList.push(...res.content);
        if( res.next !== null ) {
          this.getTeams(page+1);
        }
      }).catch(error => console.log('error', error));
    },
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
    },

    async editTeam(team) {
      await this.updateList()
      
      this.teamListAux = this.teamList.filter(i => i.id !== team.id)
      this.selectedTeam = {...team}
      this.selectedTeam.pokemon = await this.searchPokemonTeam(this.selectedTeam.id, this.selectedTeam.pokemon, 0)
      // console.log(this.selectedTeam)
      this.$refs.teamProfile.activeEdition(this.selectedTeam)

    },
    async searchPokemonTeam(teamId, pokemonList, index) {
      if (pokemonList[index] === undefined) {
        return [];
      }
      return await TeamAPI.getPokemonByTeam(teamId, pokemonList[index].id)
      .then(async res => {
        let array = [res];
        if(pokemonList[index+1]){
          array.push(... await this.searchPokemonTeam(teamId, pokemonList, index+1))
        }
        return array

      }).catch(error => console.log('error', error));
    },
    async updateList() {
      this.teamList = []
      this.teamListAux = []
      this.teamData = null
      await this.getTeams()
      this.teamListAux = this.teamList
      this.$forceUpdate()
    }

  },
}
</script>
