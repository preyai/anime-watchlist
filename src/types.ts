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
        },
        youtubeVideoId:string,
        startDate:string,
        endDate:string,
        episodeCount:number,
    };
    // synopsis: string;
    // Другие поля, которые вы хотите использовать
}
