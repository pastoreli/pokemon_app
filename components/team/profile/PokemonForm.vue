<template>
  <v-container class="overflow-auto pok-team-content pok-third-brand--light">
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          
          <v-flex xs6 class="px-2 mb-3"> 

            <label class="white--text pok-text--h4" >Pokémon:</label>
            <v-text-field
              :value="pokemon.name"
              readonly
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="pokemon" 
              box 
              hide-details />
            </v-flex>

          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Nickname:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="nickname" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Level:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="level" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Gender:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="gender" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Happinnes:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="happinnes" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Nature:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="nature" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Item:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="item" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Ability:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="password" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Moves:</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="password" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">-</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="password" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">-</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="password" 
              box 
              hide-details />
          </v-flex>

          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">-</label>
            <v-text-field
              class="pok-input-text opt--dark mini mb-2 no-label" 
              name="" 
              box 
              hide-details />
          </v-flex>

        </v-layout>
      </v-flex>
      <v-flex xs3>

        <v-layout row wrap py-4 px-2>  
            
            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">HP</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.hp}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.hp/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">Attack</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.atk}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.atk/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">Defense</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.def}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.def/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">Sp.Atk</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.sp_atk}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.sp_atk/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">Sp.Def</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.sp_def}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.sp_def/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs4 py-2 mb-4>
              <span class="white--text pok-text--h4">Speed</span>
            </v-flex>
            <v-flex xs8>
              <v-layout row wrap pa-0>
                <v-flex xs4 md2 py-2>
                  <span class="white--text pok-text--h4">{{pokemon.stats.speed}}</span>
                </v-flex>
                <v-flex xs8 md10 pr-4 py-0>
                  <v-progress-linear :value="((pokemon.stats.speed/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                </v-flex>
              </v-layout>
            </v-flex>


          </v-layout>

      </v-flex>
      <v-flex xs3>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    pokemon: {
      required: true,
      default: null
    }
  },
  data () {
    return {
      statsPercent: 200
    }
  }
}
</script>
