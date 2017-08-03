import Vue from 'vue'
import App from './App.vue'
import {Time} from './time';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  data: {
  	times: [
  		new Time("América MG", require('./assets/america_mg_60x60.png')),
  		new Time("São Paulo", require('./assets/sao_paulo_60x60.png'))
  	]
  }
})
