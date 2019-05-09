import Vue from 'vue';

Vue.filter('convertTypeLanguage', data => {
  switch (data) {
    case 'Grass': 
      return 'Grama';
      break;
    case 'Poison': 
      return 'Venenoso';
      break;
    case 'Fire': 
      return 'Fogo';
      break;
    case 'Flying': 
      return 'Voador';
      break;
    case 'Water': 
      return 'Água';
      break;
    case 'Bug': 
      return 'Inseto';
      break;
    case 'Normal': 
      return 'Normal';
      break;
    case 'Electric': 
      return 'Elétrico';
      break;
    case 'Ground': 
      return 'Terra';
      break;
    case 'Fairy': 
      return 'Fada';
      break;
    case 'Ghost': 
      return 'Fantasma';
      break;
    case 'Psychic': 
      return 'Psíquico';
      break;
    case 'Rock': 
      return 'Pedra';
      break;
    case 'Dark': 
      return 'Sombrio';
      break;
    case 'Dragon': 
      return 'Dragão';
      break;
    case 'Ice': 
      return 'Gelo';
      break;
    case 'Steel': 
      return 'Aço';
      break;
    case 'Fighting': 
      return 'Lutador';
      break;
  }
})