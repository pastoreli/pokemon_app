<template>
  <v-container class="pok-third-brand--light pa-2 pok-team-content">
    <v-layout row wrap>
      <v-flex xs7 offset-xs5 offset-md2 offset-lg5>
        <v-text-field 
          hide-details
          placeholder="Search Pokemon" 
          append-icon="fas fa-search" 
          class="pok-input-text-search pa-0 ma-0"
          @input="search" />
      </v-flex>
    </v-layout>
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
    <v-container class="overflow-auto pa-0" style="height: calc(100% - 130px)">
      <div 
        v-for="pokemon in pokemonList" 
        :key="pokemon.id"
        @click="choosedPokemon(pokemon.id)">
        <v-layout  
          row 
          wrap
          class="cursor-pointer">
          <v-flex xs2 text-xs-center>
            <img :src="pokemon.sprite" class="pok-img--sz4" style="position: relative; top: -12px" />
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
    search(val) {
      if(val.length > 2)
        this.pokemonList = this.items.filter(pok => pok.name.toLowerCase().includes(val.toLowerCase()));
      else if(val.length == 2)
        this.pokemonList = this.items;
    }
  }
}
</script>
