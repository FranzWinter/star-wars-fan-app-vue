<template>
    <div class="md-card md-elevation-3">
        <div class="md-card-content">
            <md-button class="md-raised md-primary no-margin-left" v-on:click='openReviewForm' v-show='!isCreating'>Create new review</md-button>
            <form @submit.prevent="sendReviewForm" v-show="isCreating" >
                    <md-field>
                        <label>Movie</label>
                        <md-select v-model="selectedMovie" required>
                            <md-option v-for="(movie, index) in movieText" :value="movie.value" v-bind:key="index">
                                {{ movie.value }}
                            </md-option>
                        </md-select>
                    </md-field>
                    <md-field>
                        <label>Review title</label>
                        <md-input type="text" ref="title" placeholder="Enter title..." v-model='titleText' required minlength="5" maxlength="30" ></md-input>
                    </md-field>
                    <md-field>
                        <label>Review</label>
                        <md-textarea v-model='reviewText' required minlength="5" maxlength="256" ></md-textarea>
                    </md-field>
                    <md-button class="md-raised md-primary no-margin-left" type="submit" >Create review</md-button>
                    <md-button class="md-raised md-accent" v-on:click='closeReviewForm' >Cancel</md-button>
            </form>
        </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleText: '',
            reviewText: '',
            movieText: [
                {value: 'The Phantom Menace'},
                {value: 'Attack of the Clones'},
                {value: 'Revenge of the Sith'},
                {value: 'A New Hope'},
                {value: 'The Empire Strikes Back'},
                {value: 'Return of the Jedi'},
                {value: 'The Force Awakens'}
            ],
            selectedMovie: null,
            isCreating: false
        }
    },
    methods: {
        openReviewForm() {
            this.isCreating = true;
        },
        closeReviewForm() {
            this.titleText = '';
            this.reviewText = '';
            this.selectedMovie = null;
            this.isCreating = false;
        },
        sendReviewForm() {
            if (this.titleText.length > 0 && this.reviewText.length > 0 && this.selectedMovie != null) {
                const title = this.titleText;
                const review = this.reviewText;
                const movie = this.selectedMovie
                this.$emit('create-review', {
                    title, 
                    review, 
                    movie
                });
                this.titleText = '';
                this.reviewText = '';
                this.selectedMovie = null;
                this.isCreating = false;
            }
        }
    }
}
</script>

