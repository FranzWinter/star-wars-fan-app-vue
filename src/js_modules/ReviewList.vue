<template>
    <div>
        <div class="md-card md-elevation-3">
            <div class="md-card-header">
                <div class="md-title">
                    Review section
                </div>
                <div class="md-subhead">
                    Reviews created so far: {{reviews.length}} 
                </div>
            </div>
        </div>
        <ReviewItem
            v-on:delete-review="deleteReview"
            v-for="(review, index) in reviews"
            v-bind:review="review"
            v-bind:key="index"
        />
    </div>
</template>

<script>
import ReviewItem from './ReviewItem.vue';

export default {
    props: ['reviews'],
    components: {
        ReviewItem
    },
    methods: {
        deleteReview(review) {
            const reviewIndex = this.reviews.indexOf(review);
            this.reviews.splice(reviewIndex, 1);
        }
    }
}

</script>