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
body {
  background-color: #f0f0f0;
  color: #333;
}

#app {
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav a {
  text-decoration: none;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #0056b3;
  color: white;
}

.router-link-active,
.router-link-exact-active {
  background-color: #007bff;
  color: white;
}
</style>