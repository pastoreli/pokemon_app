<template>
  <div class="pok-third-brand pok-fill--all pa-4">
    <div v-if="pokemon">
      <v-layout row wrap class="pok-third-brand--light pok-round py-4">
        <v-flex xs4 class="text-center">
          <img :src="pokemon.sprite" class="pok-img--sz2" />
          <p class="white--text pok-text--h1 ma-0">{{pokemon.name}}</p>
          <span class="pok-third-brand-text--light-2">#{{pokemon.pokedex_id}}</span>
        </v-flex>
        <v-flex xs2>
          <div>
            <label class="white--text font-weight-bold pok-text--h4">Tipo</label>
            <div class="pok-chip-container mb-4">
              <div v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'ma-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6">{{type.name | convertTypeLanguage}}</span>
              </div>
            </div>
            <div class="pt-2">
              <label class="white--text font-weight-bold pok-text--h4">Habilidades</label>
              <div class="mt-2">
                <div v-for="abilitie in abilities" :key="abilitie.id" class="mb-1">
                  <span class="white--text pok-text--h4">{{abilitie.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap>
            <template v-for="(stat, index) in stats">
              <v-flex xs4 :key="index">
                <span class="white--text pok-text--h4">{{stat.name}}</span>
              </v-flex>
              <v-flex xs8 :key="`${index}.${index+1}`" >
                <v-layout row wrap pa-0>
                  <v-flex xs4 md2 py-1>
                    <span class="white--text pok-text--h4">{{stat.value}}</span>
                  </v-flex>
                  <v-flex xs8 md10 pr-4 py-0>
                    <v-progress-linear :value="((stat.value/500)*100)" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                  </v-flex>
                </v-layout>
              </v-flex>
            </template>
          </v-layout>
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
  },
  data (){
    return {
      abilities: [
        {
          id: 1,
          name: 'Chlorophyll'
        },
        {
          id: 2,
          name: 'Overgrow'
        }
      ],
      stats: [
        {
          name: 'HP',
          value: 250
        },
        {
          name: 'Attack',
          value: 250
        },
        {
          name: 'Defence',
          value: 250
        },
        {
          name: 'Special Atack',
          value: 250
        },
        {
          name: 'Special Defence',
          value: 250
        },
        {
          name: 'Speed',
          value: 250
        }
      ]
    }
  }
}
</script>

