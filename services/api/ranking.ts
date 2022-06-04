import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { BASE_URL } from "../../config/index.ts";
import type { Song } from "../../types.ts";
import { randomInteger, drawElements, randomKatakanaWord } from "../../utils/index.ts";

const artists = [
    "amazarashi",
    "YOASOBI",
    "Hatsune Miku",
    "Aimer",
    "Higuchi Ai",
    "majiko",
    "Reol",
    "Zeraphym",
    "Goose House",
    "Aimyon",
    "Neru",
    "Lefty Hand Cream",
    "EVO+",
    "DJ Okawari",
    "阿南亮子",
    "Linked Horizon",
    "Neru",
    "Mili",
    "RADWIMPS",
    "花譜",
    "King Gnu",
    "黒うさP",
    "Yorushika",
    "Humbert Humbert",
    "坂本龍一",
    "久石讓",
    "澤野弘之",
    "米津玄師",
    "小室哲哉",
    "DECO*27",
    "神聖かまってちゃん",
    "Lindsey Stirling",
    "YUI",
    "中岛美雪"
]


type RankingResponse = Array<{
    title: string,
    top3: Array<Song>
    cover: string,
    views: number,
    update_frequence: '日' | '周'
}>

export default function ranking(ctx: Context) {
    const response: RankingResponse = Array.from({ length: 10 }, (_, i) => ({
        title: [
            "飙升榜",
            "飙降榜",
            "热歌榜",
            "冷歌榜",
            "新歌榜",
            "旧歌榜",
            "好歌榜",
            "坏歌榜",
            "vocaloid榜",
            "bangbang榜",
            "这都什么榜",
            "我也不知榜",
        ][i],
        top3: Array.from({ length: 3 }, () => ({
            title: randomKatakanaWord(),
            artist: drawElements(artists, randomInteger(1, 3)),
        })),
        cover: `${BASE_URL}/images/covers/${randomInteger(1, 25)}.jpg`,
        views: Math.floor(Math.random() * 1000000),
        update_frequence: Math.random() > 0.5 ? '日' : '周'
    }));
    ctx.response.body = response;
}
