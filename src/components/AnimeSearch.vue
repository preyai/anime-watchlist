<template>
    <div>
        <input v-model="searchTerm" placeholder="Search for anime..." @input="searchAnime" />
        <div v-if="loading">Loading...</div>
        <div v-else>
            <AnimeItem v-for="anime in searchResults" :key="anime.id" :anime="anime" @add-to-watchlist="addToWatchlist" />
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import AnimeItem from './AnimeItem.vue';
import { Anime } from '../types';

export default defineComponent({
    components: {
        AnimeItem,
    },
    setup() {
        const searchTerm = ref('');
        const searchResults = ref<Anime[]>([]);
        const loading = ref(false);

        const searchAnime = async () => {
            if (!searchTerm.value) return;
            loading.value = true;
            try {
                const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm.value}`);
                console.log(response);
                
                searchResults.value = response.data.data;
            } catch (error) {
                console.error('Error searching anime:', error);
            } finally {
                loading.value = false;
            }
        };

        const addToWatchlist = (anime: Anime) => {
            console.log('Added to watchlist:', anime.attributes.titles.en);
            // Здесь можно добавить логику для добавления аниме в список просмотра
        };

        return {
            searchTerm,
            searchResults,
            loading,
            searchAnime,
            addToWatchlist,
        };
    },
});
</script>
  