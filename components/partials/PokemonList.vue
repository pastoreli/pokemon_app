<template>
  <div class="black pok-fill--all overflow-auto">
    <v-text-field hide-details append-icon="fas fa-search" class="pok-input-text-search pa-0 ma-0" />
    <div>
      <v-list two-line class="transparent pa-0">
        <v-list-tile v-for="pokemon in items" :key="pokemon.id" class="pok-third-brand pb-3 bt-2 mb-1">
          <v-list-tile-avatar>
            <img :src="pokemon.sprite" class="pok-img--sz3 mt-3" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <p class="white--text font-weight-bold mx-0 my-2 pok-text--h3"><span class="font-weight-regular pok-text--h4">#{{pokemon.pokedex_id}}</span> {{pokemon.name}}</p>
            <span class="pok-chip-container">
              <span v-for="(type, index) in pokemon.types" :key="index" :class="['pok-chip', 'mx-1', `pok-${type.name}`]">
                <span class="white--text pok-text--h6">{{type.name | convertTypeLanguage}}</span>
              </span>
            </span>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <button class="white--text pok-text--h2 mt-3" @click="choosedPokemon(pokemon.id)"><i class="fas fa-plus" /></button>
          </v-list-tile-avatar>
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
  methods: {
    choosedPokemon(id){
      this.$emit('choosePokemon', id);
    }
  },
}
</script>

