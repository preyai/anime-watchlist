<template>
    <div class="search">
        <!-- Поле ввода для поиска аниме -->
        <input v-model="searchTerm" placeholder="Search for anime..." @input="debouncedSearch" />
        <!-- Отображение результатов поиска -->
        <div>
            <AnimeItem v-for="anime in searchResults" :key="anime.id" :anime="anime" />
        </div>
        <!-- Индикатор загрузки при подгрузке аниме -->
        <div v-if="loading">Loading more anime...</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { searchAnime } from '../api';
import AnimeItem from './AnimeItem.vue';
import { Anime } from '../types';
import debounce from '../lib/debounce'

// Переменные состояния
const searchTerm = ref('');
const searchResults = ref<Anime[]>([]);
const loading = ref(false);
const currentPage = ref(0);

// Установка слушателя событий для прокрутки страницы
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

// Основная функция поиска
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

// Функция для загрузки дополнительного аниме
const loadMoreAnime = async () => {
    if (loading.value) return;
    loading.value = true;
    currentPage.value++;
    try {
        const newAnime = await searchAnime(searchTerm.value, currentPage.value);
        searchResults.value = [...searchResults.value, ...newAnime];
    } finally {
        loading.value = false;
    }
};

// Обработчик события прокрутки для загрузки большего количества контента
const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreAnime();
    }
};

// Отложенная версия функции поиска
const debouncedSearch = debounce(performSearch, 500);
</script>

<style lang="scss">
.search input {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 5px;
}
</style>
