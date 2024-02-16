<template>
  <div id="app">
    <h1>Anime Watchlist</h1>
    <nav>
      <router-link to="/">Search</router-link>
      <router-link to="/saved">Saved Anime</router-link>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AnimeSearch from './components/AnimeSearch.vue';

export default defineComponent({
  components: {
    AnimeSearch,
  },
});
</script>

<style>
/* Общие стили */
body {
  background-color: #f0f0f0;
  /* Светлый фон */
  color: #333;
  /* Темный текст для контраста */
}

/* Стили для #app */
#app {
  
  margin: 20px auto;
  background: #fff;
  /* Белый фон для карточек */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Добавляем небольшую тень для объемности */
  border-radius: 10px;
  /* Скругляем углы */
}

/* Стили для кнопок */
button {
  background-color: #007bff;
  /* Яркий цвет кнопки */
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  /* Темнее при наведении */
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

</style>
