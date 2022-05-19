import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { SongList } from "../types.ts";

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
        offical: Array.from({ length: 10 }, (_, i) => ({
            cover: "",
            title: "",
            views: 0,
        })),
        tatsujin: Array.from({ length: 10 }, (_, i) => ({
            cover: "",
            title: "",
            views: 0,
        })),
        column: Array.from({ length: 10 }, (_, i) => ({
            title: "",
            description: "",
            icon: "",
            background: "",
        })),
    };
    ctx.response.body = response;
}
