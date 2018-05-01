import Vue from 'vue';
import './style.scss';
import genres from './util/genres.js';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `
        <div id="movie-list"> 
          <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
        </div>`,
      data() {
        return {
          movies: [{
              title: "Pulp Fiction"
            },
            {
              title: "Home Alone"
            },
            {
              title: "Austin Powers"
            }
          ]
        }
      },
    },
  },
  'movie-filter': {
    template: `
      <div id="movie-filter"> 
        Movie Filter
      </div>`
  },
});
