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
            <p v-if="activeTab === 'description'">{{ description }}</p>
            <iframe v-if="activeTab === 'video'" class="video-container"
                    :src="youtubeEmbedUrl" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            <p v-if="activeTab === 'info'">{{ episodeCount }}</p>
            <button v-if="isSaved" @click="removeFromWatchlist">Remove from Watchlist</button>
            <button v-else @click="addToWatchlist">Add to Watchlist</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Anime } from '../types';
import { saveAnime, removeAnime, isAnimeSaved } from '../storage';

const props = defineProps<{ anime: Anime }>();
const emit = defineEmits(['update-list']);

// Использование computed для автоматического обновления значений
const title = computed(() => props.anime.attributes.titles.en || props.anime.attributes.titles.en_jp);
const description = computed(() => props.anime.attributes.synopsis);
const imageUrl = computed(() => props.anime.attributes.posterImage.small);
const videoId = computed(() => props.anime.attributes.youtubeVideoId);
const episodeCount = computed(() => props.anime.attributes.episodeCount);

const activeTab = ref('description');
const isSaved = ref(isAnimeSaved(props.anime.id));

const youtubeEmbedUrl = computed(() => `https://www.youtube.com/embed/${videoId.value}`);

const addToWatchlist = () => {
    saveAnime(props.anime);
    isSaved.value = true;
    emit('update-list');
};

const removeFromWatchlist = () => {
    removeAnime(props.anime.id);
    isSaved.value = false;
    emit('update-list');
};

const changeTab = (tabName: string) => {
    activeTab.value = tabName;
};
</script>

<style lang="scss">
.card {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.card:hover {
    transform: translateY(-5px);
}

.video-container {
    width: 560px;
    height: 315px;
}
</style>
