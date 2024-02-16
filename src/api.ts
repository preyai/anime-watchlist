import axios from 'axios';
import { Anime } from './types';

// Функция для поиска аниме по тексту
export const searchAnime = async (searchTerm: string): Promise<Anime[]> => {
    try {
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}`);
        return response.data.data;
    } catch (error) {
        console.error('Error searching anime:', error);
        throw error; // Перебрасываем ошибку, чтобы ее можно было обработать в компоненте
    }
};
