<template>
  <div class="pok-third-brand pok-fill--all pa-4">
    <v-layout row wrap>
      <v-flex xs4>
        <v-text-field
          v-model="teamName"
          class="pok-input opt--dark mini mb-2" 
          name="team-name" 
          label="Team Name"
          box 
          hide-details />
      </v-flex>
      <v-flex xs8 text-xs-right py-3>
        <span class="white--text pok-text--h4 mx-2"><i class="fas fa-trash-alt mr-1" />DELETE</span>
        <span class="white--text mx-2 pok-text--h4" @click="saveTeam()"><i class="fas fa-save mr-1" />SAVE</span>
      </v-flex>
    </v-layout>

    <v-container class="pok-third-brand--light-2 pok-round overflow-hidden pok-team-container pa-0">
      <profile-tab 
        :pokemonList="choosedPokemon.list" 
        @changeTab="changeTab" />
      <pokemon-form 
        v-if="choosedPokemon.list[tabIndex]" 
        :pokemon="choosedPokemon.list[tabIndex]" 
        :data="choosedPokemon.data[tabIndex] || null" 
        :items="itemsList"
        ref="pokemonForm" />
      <pokemon-list 
        v-else 
        :items="pokemonList" 
        @choosePokemon="searchPokemon" />
    </v-container>

  </div>
</template>

<script>

//API
import PokemonAPI from '@/API/pokemon'
import TeamAPI from '@/API/team'
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
      teamName: null,
      choosedPokemon: {
        list: [],
        data: []
      },
      tabIndex: 0
    }
  },
  async mounted() {
    this.getItems()
  },
  methods: {
    async searchPokemon(id) {
      this.$set(this.choosedPokemon.list, this.tabIndex, await PokemonAPI.getPokemonById(id))
      // this.choosedPokemon.list[this.tabIndex] = await PokemonAPI.getPokemonById(id);
    },
    async getItems() {
      this.itemsList = await ItemAPI.getAllItems()
    },
    changeTab(index) {

      if(this.tabIndex !== index && this.choosedPokemon.list[this.tabIndex]){
        // this.$set(this.choosedPokemon.data, this.tabIndex, this.$refs.pokemonForm.getFormData())
        this.choosedPokemon.data[this.tabIndex] = this.$refs.pokemonForm.getFormData()
      }

      this.tabIndex = index

      if(this.choosedPokemon.list[this.tabIndex]) {
        setTimeout(() => this.$refs.pokemonForm.reload(), 100)
      }

    },
    async saveTeam() {
      await TeamAPI.createTeam({name: this.teamName})
      .then(res => {
        console.log('save', res)
      }).catch(error => {
        console.log('error', error)
      })
    }
  },
}
</script>

