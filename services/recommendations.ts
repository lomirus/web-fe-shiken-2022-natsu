import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { SongList } from "../types.ts";

type RecommendationsResponse = {
    offical: Array<SongList>,
    tatsujin: Array<SongList>,
    column: Array<{
        title: string,
        description: string,
        icon: string,
        background: string,
    }>,
};

export default function recommendations(ctx: Context) {
    const response: RecommendationsResponse = {
        offical: [],
        tatsujin: [],
        column: [],
    };
    ctx.response.body = response;
}
