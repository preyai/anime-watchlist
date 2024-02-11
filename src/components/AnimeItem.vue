<script setup lang="ts">
import { ref } from 'vue';
import { Anime } from '../types';

const props = defineProps<{
    anime: Anime
}>()

const title = ref(props.anime.attributes.titles.en || props.anime.attributes.titles.en_jp)

const addToWatchlist = () => {
    console.log('adding to watchlist')
}

</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="addToWatchlist">Add to Watchlist</button>
    </div>
</template>
  