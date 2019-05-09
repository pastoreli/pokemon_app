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
                <span class="white--text pok-text--h6">{{type.name}}</span>
              </div>
            </div>
            <div class="pt-2">
              <label class="white--text font-weight-bold pok-text--h4">Habilidades</label>
              <div class="mt-2">
                <div v-for="(move, index) in moves" :key="index" class="mb-1">
                  <span class="white--text pok-text--h4">{{move}}</span>
                </div>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs6>
          <v-layout row wrap>
            <template v-for="(stat, index) in stats">
              <v-flex xs4 :key="index">

              </v-flex>
              <v-flex xs8 :key="`${index}.${index+1}`" >

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
      moves: [
        'Chlorophyll',
        'Overgrow'
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

