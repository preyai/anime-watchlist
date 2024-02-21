import { Anime } from "./types";

// Сохраняет аниме
export const saveAnime = (anime: Anime) => {
  const savedAnime = getSavedAnime();

  // Проверяет, есть ли аниме с таким же id в сохраненных
  if (!savedAnime.some(a => a.id === anime.id)) {
    savedAnime.push(anime);
    localStorage.setItem('savedAnime', JSON.stringify(savedAnime));
  }
};

// Возвращает сохраненные аниме
export const getSavedAnime = (): Anime[] => {
  const savedAnime = localStorage.getItem('savedAnime');
  return savedAnime ? JSON.parse(savedAnime) : [];
};

// Удаляет аниме по id
export const removeAnime = (animeId: string) => {
  let savedAnime = getSavedAnime();
  savedAnime = savedAnime.filter(a => a.id !== animeId);
  localStorage.setItem('savedAnime', JSON.stringify(savedAnime));
};

// Проверяет, сохранено ли аниме с данным id
export const isAnimeSaved = (animeId: string): boolean => {
  const savedAnime = getSavedAnime();
  return savedAnime.some(a => a.id === animeId);
};