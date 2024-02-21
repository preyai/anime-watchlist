import axios from 'axios';
import { Anime } from './types';

// Функция для поиска аниме по заданному поисковому запросу и странице
export const searchAnime = async (searchTerm: string, page: number = 0): Promise<Anime[]> => {
    try {
        // Вычисление смещения для запроса на определенную страницу
        const offset = page * 10;

        // Отправка запроса к API для получения данных об аниме
        const response = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${searchTerm}&page[offset]=${offset}`);

        // Возвращение данных об аниме из ответа
        return response.data.data;
    } catch (error) {
        // Обработка ошибки при запросе
        throw error;
    }
};