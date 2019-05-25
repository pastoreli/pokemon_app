<template>
  <div class="pok-third-brand pok-fill--all overflow-auto">
    <v-text-field 
      hide-details 
      placeholder="Search Team"
      append-icon="fas fa-search" 
      class="pok-input-text-search pa-0 ma-0" />
    <div>
      <v-list two-line class="transparent pa-0">
        <v-list-tile class="pb-3 bt-2 mb-1">
          <v-list-tile-content>
            <div class="pok-fill--width text-center">
              <span class="white--text text-center"><i class="fas fa-plus" /> ADD TEAM</span>
            </div>
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

}
</script>

