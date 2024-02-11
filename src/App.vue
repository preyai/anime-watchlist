<template>
  <div id="app">
    <h1>Anime Watchlist</h1>
    <AnimeSearch />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
