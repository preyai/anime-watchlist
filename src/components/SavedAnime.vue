<template>
    <div class="saved-anime">
      <h2>Saved Anime</h2>
      <!-- Отображение списка сохраненных аниме -->
      <div v-if="savedAnime.length">
        <AnimeItem 
          v-for="anime in savedAnime" 
          :key="anime.id" 
          :anime="anime" 
          @update-list="refreshList" 
        />
      </div>
      <!-- Сообщение, если список пуст -->
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
  
  // Ссылка на массив сохраненных аниме
  const savedAnime = ref<Anime[]>([]);
  
  // Функция для загрузки и обновления списка сохраненных аниме
  const loadSavedAnime = async () => {
    savedAnime.value = getSavedAnime();
  };
  
  // Подгружаем список сохраненных аниме при монтировании компонента
  onMounted(loadSavedAnime);
  
  // Функция для обновления списка, вызывается при событии 'update-list'
  const refreshList = async () => {
    loadSavedAnime();
  };
  </script>
  
  <style lang="scss"></style>
  