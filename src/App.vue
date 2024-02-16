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

/* Стили для элемента nav */
nav {
  display: flex; /* Для горизонтального выравнивания элементов */
  justify-content: center; /* Центрирование элементов по горизонтали */
  gap: 20px; /* Расстояние между элементами */
  margin-bottom: 20px; /* Отступ снизу */
  padding: 10px; /* Внутренний отступ */
  background-color: #f2f2f2; /* Цвет фона */
  border-radius: 10px; /* Скругление углов */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Тень для элемента */
}

/* Стили для ссылок внутри nav */
nav a {
  text-decoration: none; /* Убрать подчеркивание */
  color: #007bff; /* Цвет текста */
  padding: 5px 10px; /* Внутренний отступ */
  border-radius: 5px; /* Скругление углов */
  transition: background-color 0.3s ease; /* Плавный переход фона */
}

/* Стили для ссылок при наведении */
nav a:hover {
  background-color: #0056b3; /* Цвет фона при наведении */
  color: white; /* Цвет текста при наведении */
}

/* Стили для активной ссылки (можно использовать класс .router-link-active или .router-link-exact-active) */
.router-link-active, .router-link-exact-active {
  background-color: #007bff; /* Цвет фона для активной ссылки */
  color: white; /* Цвет текста для активной ссылки */
}
</style>
