<template>
  <v-container class="pok-third-brand--light pa-2 pok-fill--all">
    <v-layout row wrap pt-2 pb-4>
      <v-flex xs2 text-xs-center>
        <label class="white--text pok-text--h3 font-weight-black">Sort by</label>
      </v-flex>
      <v-flex xs2 text-xs-center>
        <label class="white--text pok-text--h4 font-weight-bold mr-4">Name</label>
      </v-flex>
      <v-flex xs3 text-xs-center>
        <label class="white--text pok-text--h4 font-weight-bold">Type</label>
      </v-flex>
      <v-flex xs5 text-xs-center>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">HP</label>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">Atk</label>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">Def</label>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">Spa</label>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">Spd</label>
        <label class="white--text pok-text--h4 px-1 font-weight-bold">Spe</label>
        <label class="white--text pok-text--h3 px-1 font-weight-bold">BST</label>
      </v-flex>
    </v-layout>
    <v-container class="pok-fill--all overflow-auto pa-0">
      <div 
        v-for="pokemon in pokemonList" 
        :key="pokemon.id"
        @click="choosedPokemon(pokemon.id)">
        <v-layout  
          row 
          wrap
          class="cursor-pointer">
          <v-flex xs2 text-xs-center>
            <img :src="pokemon.sprite" class="pok-img--sz3" />
          </v-flex>
          <v-flex xs2>
            <label class="white--text pok-text--h4 font-weight-bold">
              <span class="font-weight-regular pok-text--h4">
                {{pokemon.pokedex_id | convertPokedexId}}
              </span> {{pokemon.name}}
            </label>
          </v-flex>
          <v-flex xs3>
            <span class="pok-chip-container">
              <span v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'mx-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6 text-center-vertical">{{type.name}}</span>
              </span>
            </span>
          </v-flex>
          <v-flex xs5 text-xs-center>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">HP</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">Atk</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">Def</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">Spa</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">Spd</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">Spe</label>
            <label class="white--text pok-text--h4 px-1 font-weight-bold">BST</label>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      pokemonList: this.items
    }
  },
  methods: {
    choosedPokemon(id){
      this.$emit('choosePokemon', id);
    },
  }
}
</script>
