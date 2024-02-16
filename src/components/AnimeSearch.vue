<template>
    <div class="search">
        <input v-model="searchTerm" placeholder="Search for anime..." @input="handleInput" />
        <div>
            <AnimeItem v-for="anime in searchResults" :key="anime.id" :anime="anime" />
        </div>
        <div v-if="loading">Loading more anime...</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { searchAnime } from '../api';
import AnimeItem from './AnimeItem.vue';
import { Anime } from '../types';
import debounce from '../lib/debounce'

const searchTerm = ref('');
const searchResults = ref<Anime[]>([]);
const loading = ref(false);
const currentPage = ref(0);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const performSearch = async () => {
    if (!searchTerm.value) {
        searchResults.value = [];
        return;
    }
    loading.value = true;
    try {
        searchResults.value = await searchAnime(searchTerm.value);
    } catch (error) {
        console.error('Error searching anime:', error);
    } finally {
        loading.value = false;
    }
};

const loadMoreAnime = async () => {
    if (loading.value) return;

    loading.value = true;
    currentPage.value++;
    const newAnime = await searchAnime(searchTerm.value, currentPage.value);
    searchResults.value = [...searchResults.value, ...newAnime];
    loading.value = false;    
};


const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreAnime();
    }
};

const debouncedSearch = debounce(performSearch, 500);

const handleInput = () => {
  debouncedSearch();
};
</script>

<style lang="scss">
/* Стили для поисковой строки */
.search input {
    border: 1px solid #ddd;
    /* Нейтральный цвет границы */
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    /* Скругляем углы */
}
</style>
