<template>
    <div class="home text-white">
        <Tweet v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
    </div>
</template>

<script>
import vtwittes from '@/vtwittes';
import { ref } from 'vue';
import Tweet from '@/components/Tweet.vue';
export default {
    name : 'HomeView',
    setup() {
        const tweets = ref(vtwittes);
        return {
            tweets
        }
    },
    components: { Tweet },
}
</script>

<style>

</style>