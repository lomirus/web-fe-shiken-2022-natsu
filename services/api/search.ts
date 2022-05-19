import { Context, helpers } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { Song } from "../../types.ts";
import { drawElements } from "../../utils/index.ts";
import { artists, couple } from "../../data/index.ts";

type SearchResponse = Array<Song>

export default function search(ctx: Context) {
    const query = helpers.getQuery(ctx);
    let response: SearchResponse | string = [];
    if (query.keyword) {
        response = Array.from({ length: 10 }, (_, i) => ({
            title: `${query.keyword} (Vol.${i + 1})`,
            artist: Math.random() < 0.9 ? 
                drawElements(artists, Math.floor(Math.random() * 3) + 1)
                : couple,
        }));
    } else {
        response = "😠 参数都不传嗯搜是吧"
    }
    
    ctx.response.body = response;
}
