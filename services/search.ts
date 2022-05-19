import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { Song } from "../types.ts";

type SearchResponse = Array<Song>

export default function search(ctx: Context) {
    const response: SearchResponse = Array.from({ length: 10 }, (_, i) => ({
        title: "",
        artist: [],
    }));
    ctx.response.body = response;
}
