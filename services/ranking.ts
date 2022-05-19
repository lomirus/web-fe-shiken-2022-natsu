import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Song } from "../types.ts";

type RankingResponse = Array<{
    title: string,
    top3: Array<Song>
    cover: string,
    views: number,
    update_frequence: '日' | '周'
}>

export default function ranking(ctx: Context) {
    const response: RankingResponse = [

    ];
    ctx.response.body = response;
}
