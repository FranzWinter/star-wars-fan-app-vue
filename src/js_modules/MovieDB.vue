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
                    <div v-for="(movie, index) in movieData.results" v-bind:key="index">
                        <div class="md-title">
                            {{movie.title}}
                        </div>
                        <div class="md-subhead">
                            {{movie.director}}
                        </div>
                        <ul>
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
            movieData: []
        }
    },
    methods: {
        fetchMovieData() {
            this.isFetching = true;
            fetch('https://swapi.co/api/films')
                .then(result => result.json())
                .then(result => {
                    this.movieData = result;
                    this.isLoading = false
                })
                .catch(error => console.log('Error: ', error))
        }
    }
}
</script>

