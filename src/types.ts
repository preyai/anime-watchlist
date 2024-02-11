export interface Anime {
    id: string;
    attributes: {
        titles: { en: string, en_jp: string }
        synopsis: string,
        posterImage: {
            tiny: string,
            small: string,
            medium: string,
            large: string,
            original: string
        }
    };
    // synopsis: string;
    // Другие поля, которые вы хотите использовать
}
