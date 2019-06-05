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
          hide-details
          @input="emitData()" />
      </v-flex>
      <v-flex xs8 text-xs-right py-3>
        <span class="white--text pok-text--h4 mx-2 cursor-pointer" @click="cancel()"><i class="fas fa-ban mr-1" />CANCEL</span>
        <span class="white--text pok-text--h4 mx-2 cursor-pointer" @click="removeTeam(editingTeam.id)"><i class="fas fa-trash-alt mr-1" />DELETE</span>
        <span class="white--text mx-2 pok-text--h4 cursor-pointer" @click="saveTeam()"><i class="fas fa-save mr-1" />SAVE</span>
      </v-flex>
    </v-layout>

    <v-container class="pok-third-brand--light-2 pok-round overflow-hidden pok-team-container pa-0">
      <pokemon-tab 
        :pokemonList="choosedPokemon.list" 
        @changeTab="changeTab" />
      <pokemon-form 
        v-if="choosedPokemon.list[tabIndex]" 
        :pokemon="choosedPokemon.list[tabIndex]" 
        :data="choosedPokemon.data[tabIndex] || null" 
        :items="itemsList"
        :natures="naturesList"
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
import NatureAPI from '@/API/nature'

//components
import PokemonTab from './PokemonTab'
import PokemonList from './PokemonList'
import PokemonForm from './PokemonForm'

export default {
  components: {
    PokemonTab,
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
      editingTeam: null,
      pokemonList: this.items,
      itemsList: [],
      naturesList: [],
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
    this.getNature()
  },
  methods: {
    async searchPokemon(id) {
      this.$set(this.choosedPokemon.list, this.tabIndex, await PokemonAPI.getPokemonById(id))
      this.emitData()
      // this.choosedPokemon.list[this.tabIndex] = await PokemonAPI.getPokemonById(id);
    },
    async getItems(page = 0) {
      await ItemAPI.getAllItems(page).then(res => {
        this.itemsList.push(...res.content)
        if(res.next) this.getItems(page+1);
      }).catch(error => console.log(error))
    },
    async getNature(page = 0) {
      await NatureAPI.getAllNatures(page).then(res => {
        this.naturesList.push(...res.content)
        console.log('nature', res)
        if(res.next) this.getNature(page+1);
      }).catch(error => console.log(error))
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
    emitData() {
      const info = {
        name: this.teamName,
        pokemons: this.choosedPokemon.list.map(pok => pok.sprite)
      }
      this.$emit('liveChange', info)
    },
    async saveTeam() {
      await TeamAPI.createTeam({name: this.teamName})
      .then(res => {
        if(this.choosedPokemon.list[this.tabIndex]){
          this.choosedPokemon.data[this.tabIndex] = this.$refs.pokemonForm.getFormData()
        }
        
        this.savePokemonTeam(res, 0)
        // this.choosedPokemon.data.forEach(async i => {
        //   alert('hi')
        //   await this.savePokemonTeam(res, i)
        // })
      }).catch(error => {
        console.log('error', error)
      })
    },
    cancel() {
      this.clearData()
      this.$emit('update')
    },
    removeTeam(teamId) {
      // alert(teamId)
      TeamAPI.deleteTeam(teamId, this.choosedPokemon.data)
      .then(res => {
        this.clearData()
        this.$emit('update')
        console.log('apagou', res)
      }).catch(error => console.log('error', error))
    },
    savePokemonTeam(teamId, index) {
      TeamAPI.savePokemonTeam(teamId, this.choosedPokemon.data)
        .then(res => {
          this.clearData()
          this.$emit('update')
          // if(this.choosedPokemon.data[index+1]){
          //   this.savePokemonTeam(teamId, index+1)
          // }
        }).catch(error => console.log('error', error))
    },
    async activeEdition(team) {
      this.editingTeam = {...team}
      this.choosedPokemon.list = []
      for (const pok of team.pokemon) {
        console.log('pok', pok)
        await this.searchPokemon(pok.pokemon_id)
        this.tabIndex++;
      }
      
      this.tabIndex = 0;
      this.choosedPokemon.data = team.pokemon.map(pok => {

        pok['nature_id'] = pok.nature.id
        pok['item_id'] = pok.item.id
        pok['ability_id'] = pok.ability.id
        pok.moves = pok.moves.map(move => move.id)
        

        return pok
      })
      this.choosedPokemon.data = team.pokemon

      if(this.choosedPokemon.list[this.tabIndex]) {
        setTimeout(() => this.$refs.pokemonForm.reload(), 100)
      }
      console.log(this.choosedPokemon.data)
    },
    clearData() {
      this. choosedPokemon = {
        list: [],
        data: []
      }
    }
  },
}
</script>

