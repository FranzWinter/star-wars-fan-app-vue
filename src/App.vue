<template>
    <div id="app">
        <h1>Star Wars fan blog</h1>
        <div class="md-layout md-gutter md-alignment-top-center">
            <div class="md-layout-item md-size-45">
                <MovieDB />
            </div>
            <div class="md-layout-item md-size-45">
                <ReviewList v-bind:reviews="reviews" />
                <CreateReview v-on:create-review="addReview" />
            </div>
        </div>
    </div>
</template>

<script>
import ReviewList from './js_modules/ReviewList.vue';
import CreateReview from './js_modules/CreateReview.vue';
import MovieDB from './js_modules/MovieDB.vue';

export default {
    components: {
        ReviewList, 
        CreateReview,
        MovieDB
    },
    data() {
        return {
            reviews: [
                {
                    title: "Oh my its...",
                    review: "Jar Jar Binks and we know why a movie got 51/100 on Metacritic. Hello, sir. I am See-Threepio, human-cyborg relations. My facilities are at your... Well, really! What's wrong with the Falcon? Hyperdrive. I'll get my people to work on it. Good.", 
                    movie: "The Phantom Menace"
                }
            ]
        }

    },
    mounted() {
        this.getReviews();
    },
    watch: {
        reviews: {
            handler: function(updatedReviews) {
                localStorage.setItem('reviews_list', JSON.stringify(updatedReviews));
            },
            deep: true
        }
    },
    methods: {
        getReviews() {
            if (localStorage.getItem('reviews_list')) {
                this.reviews = JSON.parse(localStorage.getItem('reviews_list'));                
            }
        },
        addReview(review) {
            this.reviews.push(review);
        }
    }
};
</script>