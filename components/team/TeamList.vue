<template>
  <div class="pok-third-brand pok-fill--all overflow-auto">
    <v-text-field 
      hide-details 
      placeholder="Search Team"
      append-icon="fas fa-search" 
      class="pok-input-search pa-0 ma-0" />
    <div>
      <v-list two-line class="transparent pa-0">
        <v-list-tile 
          v-if="livePokemon !== null && loadingTeamLive == false" 
          class="overflow-normal py-3"  
          style="background: #000">
          <v-list-tile-content class="overflow-normal" >
            <div class="pok-fill--all">
              <label class="white--text ml-3 pok-text--h3">{{livePokemon.name || 'Sem nome'}}</label>
              <v-layout row wrap class="pa-0 ma-0">
                <v-flex v-for="(pokemon, index) in livePokemon.pokemons" :key="index" xs2>
                  <img :src="pokemon" class="pok-img--sz4 mt-1" />
                </v-flex>
              </v-layout>
            </div>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-else>
          <v-list-tile-content style="background: #000">
            <v-progress-linear v-if="loadingTeamLive" indeterminate />
            <div v-else class="pok-fill--width text-center">
              <span class="white--text text-center text-center-vertical--force"><i class="fas fa-plus" /> ADD TEAM</span>
            </div>
          </v-list-tile-content>
          <!-- <v-list-tile-avatar>
            <button class="white--text pok-text--h2 mt-3"><i class="fas fa-plus" /></button>
          </v-list-tile-avatar> -->
        </v-list-tile>

        <v-list-tile 
          v-for="team in teams" 
          :key="team.id" 
          class="py-3 mt-2 overflow-normal pok-third-brand--light cursor-pointer pok-border"
          @click="editTeam(team)">
          <v-list-tile-content class="overflow-normal">
            <div class="pok-fill--width">
              <label class="white--text ml-3 pok-text--h4 pok-text--upper">{{team.name || 'Sem nome'}}</label>
              <v-layout row wrap class="pa-0 ma-0">
                <v-flex v-for="pokemon in team.pokemon" :key="pokemon.id" xs2>
                  <img :src="pokemon.sprite" class="pok-img--sz4 mt-1" />
                </v-flex>
              </v-layout>
            </div>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    teams: {
      required: false,
      type: Array,
      default: () => []
    },
    livePokemon: {
      required: false,
      type: Object,
      default: null,
    }
  },
  data () {
    return {
      loadingTeamLive: false
    }
  },
  methods: {
    editTeam(team) {
      this.loadingTeamLive = true
      this.$emit('editTeam', team)
      setTimeout(() => this.loadingTeamLive = false, 1000)
    }
  }
}
</script>

