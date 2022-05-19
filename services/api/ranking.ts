import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { Song } from "../../types.ts";

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
        top3: Array.from({ length: 3}, () => ({
            title: `俺想不出标题来了呀`,
            artist: ["安翔部", "初明子", "濑楽雅"],
        })),
        cover: "https://img.paulzzh.com/touhou/random",
        views: Math.floor(Math.random() * 1000000),
        update_frequence: Math.random() > 0.5 ? '日' : '周'
    }));
    ctx.response.body = response;
}
