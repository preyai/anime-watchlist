// Интерфейс для аниме
export interface Anime {
    id: string;
    attributes: {
        titles: { 
            en: string; // название на английском
            en_jp: string; // название на английском с японским произношением
        };
        synopsis: string; // описание
        posterImage: {
            tiny: string; // маленькое изображение
            small: string; // небольшое изображение
            medium: string; // среднее изображение
            large: string; // большое изображение
            original: string; // оригинальное изображение
        };
        youtubeVideoId: string; // идентификатор видео на YouTube
        startDate: string; // дата начала
        endDate: string; // дата окончания
        episodeCount: number; // количество эпизодов
    };
}