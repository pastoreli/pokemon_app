<template>
  <v-layout row wrap class="pok-team-tab">
    <template
      v-for="(pokemon, index) in pokemonList" >
      <v-flex 
        v-if="pokemon"
        :key="pokemon.id" 
        xs2 
        :class="['pok-team-tab-item text-center cursor-pointer', activeTab === index? 'pok-third-brand--light' : '']">
        <span
          v-if="activeTab === index" 
          class="pok-tab-close white--text pok-text--h4"
          @click="deletePokemon(index)">
          <i class="fas fa-times-circle" />
        </span>
        <div @click="changeTab(index)" class="pok-tab-content">
          <img :src="pokemon.sprite" class="pok-img--sz3" />
          <p class="pok-third-brand-text--light-3 pok-text--h6 font-weight-bold ma-0">
            {{pokemon.name}}
          </p>
        </div>
      </v-flex>
    </template>
    <v-flex
      v-if="pokemonList.length < 6" 
      xs2 
      text-xs-center 
      :class="['pok-team-tab-item cursor-pointer', activeTab === pokemonList.length? 'pok-third-brand--light' : '']"
      @click="changeTab(pokemonList.length)">
      <div class="text-center-vertical--force">
        <span class="white--text"><i class="fas fa-plus" /> ADD TEAM</span>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    pokemonList: {
      required: false,
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeTab: 0
    }
  },
  methods: {
    changeTab(index) {
      this.activeTab = index
      this.$emit('changeTab', index)
    },
    deletePokemon(index) {
      this.$emit('deletePokemon', index)
      this.activeTab = this.pokemonList.length
    }
  }
}
</script>

