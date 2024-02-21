// Подключаем необходимые модули
import { createRouter, createWebHistory } from 'vue-router';
import AnimeSearch from '../components/AnimeSearch.vue';
import SavedAnime from '../components/SavedAnime.vue';

// Определяем маршруты
const routes = [
  {
    path: '/',
    name: 'Search',
    component: AnimeSearch
  },
  {
    path: '/saved',
    name: 'Saved',
    component: SavedAnime
  }
];

// Создаем роутер
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;