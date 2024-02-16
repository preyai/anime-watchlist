import axios from 'axios';
import { Anime } from './types';

// Функция для поиска аниме по тексту
export const searchAnime = async (searchTerm: string, page: number = 0): Promise<Anime[]> => {
    try {
        const offset = page * 10;
        console.log(offset);
        
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[offset]=${offset}`);
        
        return response.data.data;
    } catch (error) {
        console.error('Error searching anime:', error);
        throw error;
    }
};
