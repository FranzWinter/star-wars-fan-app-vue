<template>
    <div class="md-card md-elevation-3">
        <div class="md-card-header">
            <div class="md-title">Star Wars movie DB</div>
            <div class="md-subhead">Info about all 7 movies!</div>
        </div>
        <div class="md-card-actions" v-show="!isFetching">
            <md-button class="md-raised md-primary" v-on:click="fetchMovieData" >Get movie data</md-button>
        </div>
        <div class="md-card-content" v-show="isFetching">
            <LoadingData v-if="isLoading" />
            <div v-if="!isLoading">
                <div>
                    <md-switch v-model="movieDataSortById" >Sorted by episode number</md-switch>
                </div>
                <div v-for="(movie, index) in fiteredMovies" v-bind:key="index">
                    <div class="md-title">
                        {{movie.title}}
                    </div>
                    <div class="md-subhead">
                        {{movie.director}}
                    </div>
                    <ul>
                        <li>Episode Id: {{movie.episode_id}} </li>
                        <li>Release date: {{movie.release_date}} </li>
                        <li>Fancy opening crawl: {{movie.opening_crawl}}  </li>
                        <li>Producer: {{movie.producer}} </li>
                    </ul>
                    <md-divider></md-divider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingData from './LoadingData.vue';

export default {
    components: {
        LoadingData
    },
    data() {
        return {
            isFetching: false,
            isLoading: true,
            movieData: [], 
            movieDataSortById: true
        }
    },
    computed: {
        fiteredMovies() {
            if (this.movieDataSortById === false) {
                this.movieData.sort(function (a, b) {
                    var a = a.release_date;
                    var b = b.release_date;
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                    return 0;
                })
            }
            if (this.movieDataSortById === true) {
                this.movieData.sort(function (a, b) {
                    return a.episode_id - b.episode_id;
                })
            }
            return this.movieData;
        }
    },
    methods: {
        fetchMovieData() {
            this.isFetching = true;
            fetch('https://swapi.co/api/films')
                .then(result => result.json())
                .then(result => {
                    this.movieData = result.results;
                    this.isLoading = false
                })
                .catch(error => console.log('Error: ', error))
        }
    }
}
</script>

