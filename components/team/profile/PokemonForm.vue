<template>
  <v-container v-if="pokemon" class="overflow-auto pok-team-content pok-third-brand--light">
    <v-layout row wrap>
      <v-flex xs6>
        <v-layout row wrap>
          
          <!-- <v-flex xs6 class="px-2 mb-3"> 

            <label class="white--text pok-text--h4" >Pokémon:</label>
            <v-text-field
              :value="pokemon.name"
              readonly
              class="pok-input opt--dark mini mb-2 no-label" 
              name="pokemon" 
              box 
              hide-details />
            </v-flex> -->

          <v-flex xs12 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Nickname:</label>
            <v-text-field
            v-model="formData.name"
              class="pok-input opt--dark mini mb-2 no-label" 
              name="nickname" 
              box 
              hide-details />
          </v-flex>
          
          <!-- <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Level:</label>
            <v-text-field
              class="pok-input opt--dark mini mb-2 no-label" 
              name="level" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs3 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Gender:</label>
            <v-text-field
              class="pok-input opt--dark mini mb-2 no-label" 
              name="gender" 
              box 
              hide-details />
          </v-flex> -->
          
          <!-- <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Happinnes:</label>
            <v-text-field
              class="pok-input opt--dark mini mb-2 no-label" 
              name="happinnes" 
              box 
              hide-details />
          </v-flex> -->
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Nature:</label>
            <v-autocomplete
              v-model="formData.nature_id"
              :items="natures"
              item-text="name"
              item-value="id"
              color="#f5f5f5"
              class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
              name="nature" 
              box 
              hide-details />
          </v-flex>
          
          <v-flex xs6 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Item:</label>
            <v-autocomplete
              v-model="formData.item_id"
              :items="items"
              item-text="name"
              item-value="id"
              color="#f5f5f5"
              class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
              name="item" 
              box 
              hide-details>

              <template v-slot:selection="data">
                  <v-list-tile-avatar>
                    <img :src="data.item.sprite">
                  </v-list-tile-avatar>
                  <v-list-tile-content v-text="data.item.name" class="white--text"></v-list-tile-content>
              </template>
              
              <template v-slot:item="data" class="pok-third-brand--light pok-fill--all">
                <v-list-tile-avatar>
                  <img :src="data.item.sprite">
                </v-list-tile-avatar>
                <v-list-tile-content v-text="data.item.name" class="white--text"></v-list-tile-content>
              </template>
              
            </v-autocomplete>
          </v-flex>
          
          <v-flex xs12 class="px-2 mb-3"> 
            <label class="white--text pok-text--h4">Ability:</label>
            <v-autocomplete
              v-model="formData.ability_id"
              :items="pokemon.abilities"
              item-text="name"
              item-value="id"
              color="#f5f5f5"
              class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
              name="item" 
              box 
              hide-details />
          </v-flex>

          <v-flex xs12>
            <v-layout row wrap>
              <v-flex xs6 class="px-2 mb-3"> 
                <label class="white--text pok-text--h4">Moves:</label>
                <v-autocomplete
                  v-model="formData.moves[0]"
                  :items="moveList"
                  item-text="name"
                  item-value="id"
                  item-disabled="disabled"
                  color="#f5f5f5"
                  class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
                  name="item" 
                  box 
                  hide-details
                  @change="lockMove()" />
              </v-flex>
            
              <v-flex xs6 class="px-2 mb-3"> 
                <!-- <label class="white--text pok-text--h4">-</label> -->
                <v-autocomplete
                  v-model="formData.moves[1]"
                  :items="moveList"
                  item-text="name"
                  item-value="id"
                  item-disabled="disabled"
                  color="#f5f5f5"
                  class="pok-input pok-input-select icon opt--dark mini mb-2 mt-4 no-label" 
                  name="item" 
                  box 
                  hide-details
                  @change="lockMove()" />
              </v-flex>
          
              <v-flex xs6 class="px-2 mb-3"> 
                <!-- <label class="white--text pok-text--h4">-</label> -->
                <v-autocomplete
                  v-model="formData.moves[2]"
                  :items="moveList"
                  item-text="name"
                  item-value="id"
                  item-disabled="disabled"
                  color="#f5f5f5"
                  class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
                  name="item" 
                  box 
                  hide-details
                  @change="lockMove()" />
              </v-flex>

              <v-flex xs6 class="px-2 mb-3"> 
                <!-- <label class="white--text pok-text--h4">-</label> -->
                <v-autocomplete
                  v-model="formData.moves[3]"
                  :items="moveList"
                  item-text="name"
                  item-value="id"
                  item-disabled="disabled"
                  color="#f5f5f5"
                  class="pok-input pok-input-select icon opt--dark mini mb-2 no-label" 
                  name="item" 
                  box 
                  hide-details
                  @change="lockMove()" />
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-flex>
      <v-flex xs6>

        <v-layout row wrap px-2>  
            <v-flex xs6 pt-4>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">HP</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.hp + formData.ivs.hp + (formData.evs.hp / 4)) * 100) / 100) + 100 + 10)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.hp + formData.ivs.hp + (formData.evs.hp / 4)) * 100) / 100) + 100 + 10)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.hp, IV: formData.ivs.hp}" 
                hasLabel
                ref="EVIVfieldHP"
                @change="(data) => listenStatus(data, 'hp')" />
            </v-flex>
          
            <v-flex xs6>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">Attack</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.atk + formData.ivs.atk + (formData.evs.atk / 4)) * 100) / 100) +  5)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.atk + formData.ivs.atk + (formData.evs.atk / 4)) * 100) / 100) +  5)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.atk, IV: formData.ivs.atk}" 
                ref="EVIVfieldAtk"
                @change="(data) => listenStatus(data, 'atk')" />
            </v-flex>

            <v-flex xs6>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">Defense</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.def + formData.ivs.def + (formData.evs.def / 4)) * 100) / 100) +  5)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.def + formData.ivs.def + (formData.evs.def / 4)) * 100) / 100) +  5)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.def, IV: formData.ivs.def}" 
                ref="EVIVfieldDef"
                @change="(data) => listenStatus(data, 'def')" />
            </v-flex>

            <v-flex xs6>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">Sp.Atk</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.sp_atk + formData.ivs.sp_atk + (formData.evs.sp_atk / 4)) * 100) / 100) +  5)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.sp_atk + formData.ivs.sp_atk + (formData.evs.sp_atk / 4)) * 100) / 100) +  5)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.sp_atk, IV: formData.ivs.sp_atk}" 
                ref="EVIVfieldSpAtk"
                @change="(data) => listenStatus(data, 'sp_atk')" />
            </v-flex>

            <v-flex xs6>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">Sp.Def</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.sp_def + formData.ivs.sp_def + (formData.evs.sp_def / 4)) * 100) / 100) +  5)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.sp_def + formData.ivs.sp_def + (formData.evs.sp_def / 4)) * 100) / 100) +  5)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.sp_def, IV: formData.ivs.sp_def}" 
                ref="EVIVfieldSpDef"
                @change="(data) => listenStatus(data, 'sp_def')" />
            </v-flex>

            <v-flex xs6>
              <v-layout row wrap>
                <v-flex xs4 py-2 mb-4>
                  <span class="white--text pok-text--h4">Speed</span>
                </v-flex>
                <v-flex xs8>
                  <v-layout row wrap pa-0>
                    <v-flex xs4 md2 py-2>
                      <span class="white--text pok-text--h4">{{Math.floor((((2 * pokemon.stats.speed + formData.ivs.speed + (formData.evs.speed / 4)) * 100) / 100) +  5)}}</span>
                    </v-flex>
                    <v-flex xs8 md10 pr-4 py-0>
                      <v-progress-linear :value="((Math.floor((((2 * pokemon.stats.speed + formData.ivs.speed + (formData.evs.speed / 4)) * 100) / 100) +  5)/statsPercent)*100)" height="12" background-color="#CACACA" color="pok-primary-brand" class="pok-linear-progress" />
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6>
              <ev-iv-fields 
                :data="{EV: formData.evs.speed, IV: formData.ivs.spped}" 
                ref="EVIVfieldSpeed"
                @change="(data) => listenStatus(data, 'speed')" />
            </v-flex>


          </v-layout>

      </v-flex>
      <v-flex xs3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import EvIvFields from './EvIvFields'

export default {
  components: {
    EvIvFields
  },
  props: {
    pokemon: {
      required: true,
      default: null
    },
    data: {
      required: true,
      default: null
    },
    items: {
      required: true,
      type: Array,
      default: () => []
    },
    natures: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      statsPercent: 600,
      moveList: this.pokemon? this.pokemon.moves : [],
      formData: {
        pokemon_id: this.pokemon? this.pokemon.id : null,
        name: null,
        ability_id: null,
        nature_id: null,
        item_id: null,
        ivs: {
          hp: null,
          atk: null,
          def: null,
          sp_atk: null,
          sp_def: null,
          speed: null
        },
        evs: {
          hp: null,
          atk: null,
          def: null,
          sp_atk: null,
          sp_def: null,
          speed: null
        },
        moves: []
      }
    }
  },
  methods: {
    reload() {
      if(this.data) {
        setTimeout(() => {
          this.formData = this.data
          this.$refs.EVIVfieldHP.reload()
          this.$refs.EVIVfieldAtk.reload()
          this.$refs.EVIVfieldDef.reload()
          this.$refs.EVIVfieldSpAtk.reload()
          this.$refs.EVIVfieldSpDef.reload()
          this.$refs.EVIVfieldSpeed.reload()
          this.moveList = this.pokemon? this.pokemon.moves : []
        }, 100);
      }
    },
    lockMove() {
      this.moveList = this.moveList.map(move => {
          move['disabled'] = this.formData.moves.includes(move.id)
          return move
      })
    },
    listenStatus(data, key) {
      this.formData.ivs[key] =  data.IV != "" ? parseInt(data.IV) : 0
      this.formData.evs[key] = data.EV != "" ? parseInt(data.EV) : 0
    },
    getFormData() {
      return this.formData
    }
  }
}
</script>
