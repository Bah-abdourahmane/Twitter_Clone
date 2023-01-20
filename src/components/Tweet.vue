<template>
    <div class="tweet border-b border-gray-600">
        <router-link to="" class="flex p-4">
            <figure class="w-16 h-16 rounded-full mr-3">
                <img :src="tweet.author.profile_img_url" alt="" class="rounded-full object-cover w-full h-full">
            </figure>
            <!-- tweet body -->
            <section class="flex-1">
                <div class="tweet-author">
                    <span class="font-bold">{{ tweet.author.display_name }}</span>
                    <span class="text-gray-500 ml-2 font-normal">{{ tweet.author.username }}</span>
                </div>
                <!-- tweet body text -->
                <div :class="(tweet.image ? 'mb-3' : '')">
                    <p class="" v-html="tweet.body"></p>
                </div>
                <!-- tweet body image -->
                <figure v-if="tweet.image"
                    class="rounded-xl border h-44 md:h-[500px] md:w-[600px] border-gray-600 overflow-hidden">
                    <img :src="tweet.image.url" :alt="tweet.image.alt" class="w-full h-full object-cover">
                </figure>
                <!-- tweet body icons -->
                <div class="mt-2 flex items-center justify-between">
                    <div class="text-gray-500">
                        <i
                            class="fas fa-comment p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500 active:scale-90"></i>
                        <span>{{ tweet.stats.comments.length }}</span>
                    </div>
                    <div class="text-gray-500">
                        <i
                            class="fas fa-retweet p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500 active:scale-90"></i>
                        <span>{{ tweet.stats.retweets.length }}</span>
                    </div>
                    <div class="text-gray-500">
                        <i
                            class="fas fa-heart p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500 active:scale-90"></i>
                        <span>{{ tweet.stats.likes.length }}</span>
                    </div>
                    <div class="text-gray-500">
                        <i
                            class="fas fa-share p-2 mr-1 rounded-full hover:bg-green-900 hover:text-green-500 active:scale-90"></i>
                    </div>
                </div>
            </section>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Tweet",
    props: ['tweet']
}
</script>

<style>
::-webkit-scrollbar {
    width: 3px;
}
</style>