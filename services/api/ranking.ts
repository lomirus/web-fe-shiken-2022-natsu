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
        title: "",
        top3: [],
        cover: "https://img.paulzzh.com/touhou/random",
        views: 0,
        update_frequence: Math.random() > 0.5 ? '日' : '周'
    }));
    ctx.response.body = response;
}
