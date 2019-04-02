<template>
    <div>
        <!-- part used to edit review -->
        <div class="md-card md-elevation-3"  v-show='!isEditing'>
            <div class="md-card-header">
                <div class="md-title">
                    {{ review.title }}
                </div>
                <div class="md-subhead">
                    {{ review.movie }}
                </div>
            </div>
            <div class="md-card-content">
                 {{ review.review }} 
            </div>
            <div class="md-card-actions">
                <md-button class="md-raised md-primary" type="button" v-on:click='showEditForm'>EDIT <i class="fas fa-edit"></i></md-button>
                <md-button class="md-raised md-accent" type="button" v-on:click='deleteReview(review)'>DELETE <i class="fas fa-times"></i></md-button>
            </div>
        </div>
        <!-- part used to show review -->
        <div class="md-card md-elevation-3" v-show='isEditing'>
            <div class="md-card-content">
                <form @submit.prevent="hideEditForm">
                    <md-field>
                        <label>Movie</label>
                        <md-input type="text" v-model='review.movie' disabled></md-input>
                    </md-field>
                    <md-field>
                        <label>Title</label>
                        <md-input type="text" v-model='review.title' required minlength="5" maxlength="30" ></md-input>
                    </md-field>
                    <md-field>
                        <label>Review</label>
                        <md-textarea v-model='review.review' required minlength="5" maxlength="256"></md-textarea>
                    </md-field>
                    <md-button class="md-raised md-primary no-margin-left" type="submit">Save</md-button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['review'],
    data() {
        return {
            isEditing: false
        };
    },
    methods: {
        showEditForm() {
            this.isEditing = true;
        },
        hideEditForm() {
            this.isEditing = false;
        },
        deleteReview(review) {
            this.$emit('delete-review', review)
        }
    }
}
</script>
