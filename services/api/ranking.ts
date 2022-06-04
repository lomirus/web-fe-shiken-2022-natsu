import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { Song } from "../../types.ts";
import { drawElement, randomInteger, drawElements } from "../../utils/index.ts";

const katakanas = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ヤ", "ユ", "ヨ", "ワ",
    "ッ", "ッ", "ッ", "ッ", "ッ",
    "キャ", "キュ", "キョ",
    "シャ", "シュ", "ショ",
    "チャ", "チュ", "チョ",
    "ニャ", "ニュ", "ニョ",
    "リャ", "リュ", "リョ",
    "ジャ", "ジュ", "ジョ",
    "ヴァ", "ヴィ", "ヴ", "ヴェ", "ヴォ",
    "ン"
]

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
            title: Array.from({ length: randomInteger(3, 8) }, () => drawElement(katakanas)).join(""),
            artist: drawElements(artists, randomInteger(1, 3)),
        })),
        cover: "https://img.paulzzh.com/touhou/random",
        views: Math.floor(Math.random() * 1000000),
        update_frequence: Math.random() > 0.5 ? '日' : '周'
    }));
    ctx.response.body = response;
}
