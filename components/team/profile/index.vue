<template>
  <div class="pok-third-brand pok-fill--all pa-4">
    <v-layout row wrap>
      <v-flex xs4>
        <v-text-field
          class="pok-input opt--dark mini mb-2" 
          name="password" 
          label="Team Name"
          box 
          hide-details />
      </v-flex>
      <v-flex xs8 text-xs-right py-3>
        <span class="white--text pok-text--h4 mx-2"><i class="fas fa-trash-alt mr-1" />DELETE</span>
        <span class="white--text mx-2 pok-text--h4"><i class="fas fa-save mr-1" />SAVE</span>
      </v-flex>
    </v-layout>

    <v-container class="pok-third-brand--light-2 pok-round overflow-hidden pok-team-container pa-0">
      <profile-tab :pokemonList="choosedPokemonList" @changeTab="changeTab" />
      <pokemon-form v-if="choosedPokemonList[tabIndex]" :pokemon="choosedPokemonList[tabIndex]" :items="itemsList" />
      <pokemon-list v-else :items="pokemonList" @choosePokemon="searchPokemon" />
    </v-container>

  </div>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon'
import ItemAPI from '@/API/item'

//components
import ProfileTab from './ProfileTab'
import PokemonList from './PokemonList'
import PokemonForm from './PokemonForm'

export default {
  components: {
    ProfileTab,
    PokemonList,
    PokemonForm
  },
  props: {
    items: {
      required: true,
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      pokemonList: this.items,
      itemsList: [],
      choosedPokemonList: [],
      tabIndex: 0
    }
  },
  async mounted() {
    this.getItems()
  },
  methods: {
    async searchPokemon(id) {
      this.$set(this.choosedPokemonList, this.tabIndex, await PokemonAPI.getPokemonById(id))
      // this.choosedPokemonList[this.tabIndex] = await PokemonAPI.getPokemonById(id);
    },
    async getItems() {
      this.itemsList = await ItemAPI.getAllItems()
    },
    changeTab(index) {
      this.tabIndex = index
    }
  },
}
</script>

