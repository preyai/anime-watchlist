import { Anime } from "./types";

export const saveAnime = (anime: Anime) => {
    const savedAnime = getSavedAnime();
    if (!savedAnime.some(a => a.id === anime.id)) {
        savedAnime.push(anime);
        localStorage.setItem('savedAnime', JSON.stringify(savedAnime));
    }
};

export const getSavedAnime = (): Anime[] => {
    const savedAnime = localStorage.getItem('savedAnime');
    return savedAnime ? JSON.parse(savedAnime) : [];
};

export const removeAnime = (animeId: string) => {
    let savedAnime = getSavedAnime();
    savedAnime = savedAnime.filter(a => a.id !== animeId);
    localStorage.setItem('savedAnime', JSON.stringify(savedAnime));
};

export const isAnimeSaved = (animeId: string): boolean => {
    const savedAnime = getSavedAnime();
    return savedAnime.some(a => a.id === animeId);
};