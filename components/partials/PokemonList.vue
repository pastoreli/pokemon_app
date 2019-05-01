<template>
  <div class="black pok-fill--all overflow-auto">
    <v-text-field hide-details append-icon="fas fa-search" class="pok-input-text-search pa-0 ma-0" />
    <div>
      <v-list two-line class="transparent pa-0">
        <v-list-tile v-for="i in 10" :key="i" class="pok-third-brand pb-3 bt-2 mb-1">
          <v-list-tile-avatar>
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`" class="pok-img--sz3 mt-3" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <p class="white--text font-weight-bold mx-0 my-2 pok-text--h3"><span class="font-weight-regular pok-text--h4">#001</span> Bulbasaur</p>
            <span class="pok-chip-container">
              <span class="pok-chip pok-primary-brand">
                <span class="pok--content white--text pok-text--h6">Grass</span>
              </span>
              <span class="pok-chip pok-primary-brand">
                <span class="pok--content white--text pok-text--h6">Poison</span>
              </span>
            </span>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <button class="white--text pok-text--h2 mt-3"><i class="fas fa-plus" /></button>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

