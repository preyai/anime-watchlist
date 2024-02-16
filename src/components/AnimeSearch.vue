<template>
    <div class="search">
        <input v-model="searchTerm" placeholder="Search for anime..." @input="performSearch" />
        <div v-if="loading">Loading...</div>
        <div v-else>
            <AnimeItem v-for="anime in searchResults" :key="anime.id" :anime="anime" @add-to-watchlist="addToWatchlist" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { searchAnime } from '../api';
import AnimeItem from './AnimeItem.vue';
import { Anime } from '../types';

const searchTerm = ref('');
const searchResults = ref<Anime[]>([]);
const loading = ref(false);

// Функция, которая вызывается при каждом изменении searchTerm
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

// Отслеживаем изменения searchTerm и вызываем performSearch
// Это можно заменить на @input="performSearch" в шаблоне, если хотите мгновенный поиск
watchEffect(() => {
    performSearch();
});

const addToWatchlist = (anime: Anime) => {
    console.log('Added to watchlist:', anime.attributes.titles.en);
    // Здесь можно добавить логику для добавления аниме в список просмотра
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
