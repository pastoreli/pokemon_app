<template>
  <v-toolbar fixedapp class="pok-tool-bar pok-shadow--none transparent">
    <img draggable="false" class="line-header" :src="require(`~/assets/images/header-line.svg`)" />
    
    <div class="header-content">
      <v-layout row wrap class="items-left">
        <v-flex class="px-2">
          <span class="round-icon big-icon pok-shadow--1 center-item"></span>          
        </v-flex>
        <v-flex class="px-2">
          <span class="round-icon pok-danger pok-shadow--1 center-item"></span>
        </v-flex>
        <v-flex class="px-2">
          <span class="round-icon pok-alert pok-shadow--1 center-item"></span>
        </v-flex>
        <v-flex class="px-2">
          <span class="round-icon pok-success pok-shadow--1 center-item"></span>
        </v-flex>
      </v-layout>
    </div>
        
  </v-toolbar>
</template>
