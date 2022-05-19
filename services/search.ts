import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { Song } from "../types.ts";

type SearchResponse = Array<Song>

export default function search(ctx: Context) {
    const response: SearchResponse = [

    ];
    ctx.response.body = response;
}
