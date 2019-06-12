<template>
  <div class="pok-third-brand pok-fill--all pa-4">
    <div v-if="pokemon">
      <v-layout row wrap class="pok-third-brand--light pok-round-2 py-4">
        <v-flex xs4 class="text-center">
          <img :src="pokemon.sprite" class="pok-img--sz2" />
          <p class="white--text pok-text--h1 ma-0">{{pokemon.name}}</p>
          <span class="pok-third-brand-text--light-3">{{pokemon.pokedex_id | convertPokedexId}}</span>
        </v-flex>
        <v-flex xs2>
          <div>
            <label class="white--text font-weight-bold pok-text--h4">Type</label>
            <div class="pok-chip-container mb-4 mt-2">
              <div v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'ma-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6 text-center-vertical">{{type.name}}</span>
              </div>
            </div>
            <div class="pt-2">
              <label class="white--text font-weight-bold pok-text--h4">Abilities</label>
              <div class="mt-2">
                <div v-for="ability in pokemon.abilities" :key="ability.id" class="mb-1">
                  <v-tooltip top max-width="250px" content-class="text-center">
                    <template v-slot:activator="{ on }">
                      <span v-on="on" @mouseover="callAbilityDetails(ability.id)" @mouseleave="showAbilityDetails = null" class="white--text pok-text--h4">{{ability.name}}</span>
                    </template>
                    <span v-if="showAbilityDetails">{{showAbilityDetails.description}}</span>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap>  
            
            <v-flex xs4>
              <span class="white--text pok-text--h4">HP</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.hp}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.hp/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4>
              <span class="white--text pok-text--h4">Attack</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.atk}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.atk/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4>
              <span class="white--text pok-text--h4">Defense</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.def}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.def/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4>
              <span class="white--text pok-text--h4">Special Attack</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.sp_atk}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.sp_atk/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4>
              <span class="white--text pok-text--h4">Special Defense</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.sp_def}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.sp_def/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4>
              <span class="white--text pok-text--h4">Speed</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-1>
                  <span class="white--text pok-text--h4">{{pokemon.stats.speed}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.speed/statsPercent)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      <div class="pok-third-brand--light pok-round-2 py-4 px-5 mt-4 overflow-hidden " style="height: 500px">
        <v-layout>
        <v-flex xs12>
          <span class="white--text pok-text--h2">Moves</span>
        </v-flex>
        </v-layout>
        <div class="pa-0 mt-3 pok-fill--all overflow-auto">
          <v-layout row wrap>
            <v-flex  xs4 v-for="move in pokemon.moves" :key="move.id">
              <v-tooltip top max-width="250px" content-class="text-center">
                <template v-slot:activator="{ on }">
                  <span v-on="on" @mouseover="callMoveDetails(move.id)" class="white--text pok-text--h4">{{move.name}}</span>
                </template>
                <span v-if="showMoveDetails">{{showMoveDetails.description}}</span>
              </v-tooltip>
              <div class="pok-chip-container mb-4 mt-2">
                <div :class="['pok-chip', 'ma-1', `pok-${move.type}`]">
                  <span class="white--text pok-text--h6 text-center-vertical">{{move.type}}</span>
                </div>
                <div :class="['pok-chip', 'ma-1', `pok-${move.damage_category}`]">
                  <span class="white--text pok-text--h6 text-center-vertical">{{move.damage_category}}</span>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import abilityAPI from '@/API/ability';
import moveAPI from '@/API/move';

export default {
  props: {
    pokemon: {
      required: true,
      default: null
    }
  },
  data (){
    return {
      statsPercent: 200,
      showAbilityDetails: null,
      showMoveDetails: null
    }
  },
  methods: {
    async callAbilityDetails(id) {
      this.showAbilityDetails = await abilityAPI.getAbilityById(id);
    },

    async callMoveDetails(id) {
      this.showMoveDetails = await moveAPI.getMoveById(id);
    }
  }
}
</script>

