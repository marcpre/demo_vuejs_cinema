import Vue from 'vue';
import './style.scss';

new Vue({
  el: '#app',
  components: {
    'movie-list': {
      template: `<div id="movie-list"> 
        <div v-for="movie in movies">{{ movie.title }}</div>
      </div>`,
      data() {
        return {
          movies: [
            { title: "Pulp Fiction" },
            { title: "Pulp Fiction" },
            { title: "Pulp Fiction" }
          ]
        }
      },
    },
    'movie-filter': {
      template: `<div id="movie-filter"> Movie Filter </div>`,
    }
  },
});
