<template>
  <div class="black pok-fill--all overflow-auto">
    <v-text-field 
      hide-details 
      placeholder="Search Pokemon"
      append-icon="fas fa-search" 
      class="pok-input-search pa-0 ma-0" 
      @input="search" />
    <div>
      <v-list two-line class="transparent py-0">
        <v-list-tile v-for="pokemon in pokemonList" :key="pokemon.id" class="pok-third-brand pb-3 pt-2 px-3 mb-1" @click="choosedPokemon(pokemon.id)">
          <v-list-tile-avatar>
            <img :src="pokemon.sprite" class="pok-img--sz4 mt-3" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <p class="white--text font-weight-bold mx-0 my-2 pok-text--h3"><span class="font-weight-regular pok-text--h4">{{pokemon.pokedex_id | convertPokedexId}}</span> {{pokemon.name}}</p>
            <span class="pok-chip-container">
              <span v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'mx-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6 text-center-vertical">{{type.name}}</span>
              </span>
            </span>
          </v-list-tile-content>
          <!-- <v-list-tile-avatar>
            <button class="white--text pok-text--h2 mt-3"><i class="fas fa-plus" /></button>
          </v-list-tile-avatar> -->
        </v-list-tile>
      </v-list>
    </div>
  </div>
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
  data() {
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
  },  
}
</script>

