<script setup lang="ts">
import { ref } from 'vue';
import { Anime } from '../types';
import { saveAnime, removeAnime, isAnimeSaved } from '../storage';

const props = defineProps<{
    anime: Anime
}>()

const title = ref(props.anime.attributes.titles.en || props.anime.attributes.titles.en_jp);
const description = ref(props.anime.attributes.synopsis);
const imageUrl = ref(props.anime.attributes.posterImage.small);
const videoId = ref(props.anime.attributes.youtubeVideoId);
const episodeCount = ref(props.anime.attributes.episodeCount);
const activeTab = ref('description'); // 'description', 'video', 'info'
const isSaved = isAnimeSaved(props.anime.id)

const addToWatchlist = () => {
    saveAnime(props.anime)
}

const removeFromWatchlist = () => {
    removeAnime(props.anime.id)
}

const changeTab = (tabName: string) => {
    activeTab.value = tabName;
}
</script>


<template>
    <div class="card">
        <img :src="imageUrl" :alt="title">
        <div class="content">
            <h2>{{ title }}</h2>
            <div class="tabs">
                <button @click="changeTab('description')">Description</button>
                <button @click="changeTab('video')">Video</button>
                <button @click="changeTab('info')">Info</button>
            </div>
            <div v-if="activeTab === 'description'">
                <p>{{ description }}</p>
            </div>
            <div v-if="activeTab === 'video'" class="video-container">
                <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${videoId}`" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <div v-if="activeTab === 'info'">
                <p>{{ episodeCount }}</p>
            </div>
            <button v-if="isSaved" @click="removeFromWatchlist">Remove from Watchlist</button>
            <button v-else @click="addToWatchlist">Add to Watchlist</button>
        </div>
    </div>
</template>

  
<style lang="scss">
/* Стили для карточки аниме */
.card {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    background: #fff;
    /* Белый фон */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Тень для объема */
    border-radius: 10px;
    /* Скругляем углы */
    overflow: hidden;
    /* Скрываем все за пределами границ */
    transition: transform 0.3s ease;
    /* Плавное преобразование */
}

.tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.card:hover {
    transform: translateY(-5px);
    /* Поднимаем карточку при наведении */
}
</style>
