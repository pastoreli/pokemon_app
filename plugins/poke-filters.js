import Vue from 'vue';
import numeral from 'numeral';

Vue.filter('convertPokedexId', data => {
  return `#${numeral(data).format('000')}`;
})