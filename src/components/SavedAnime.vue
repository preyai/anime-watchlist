<template>
    <div class="saved-anime">
        <h2>Saved Anime</h2>
        <div v-if="savedAnime.length">
            <AnimeItem v-for="anime in savedAnime" :key="anime.id" :anime="anime" @update-list="refreshList" />
        </div>
        <div v-else>
            <p>No saved anime yet.</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AnimeItem from './AnimeItem.vue';
import { Anime } from '../types';
import { getSavedAnime } from '../storage';

const savedAnime = ref<Anime[]>([]);

onMounted(async () => {
    savedAnime.value = getSavedAnime();
});

const refreshList = async () => {
  savedAnime.value = getSavedAnime();
};

</script>
  
<style lang="scss"></style>
  