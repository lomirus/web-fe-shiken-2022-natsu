import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { randomKatakanaWord } from "../../utils/index.ts";



type HotResponse = Array<string>

export default function search(ctx: Context) {
    let response: HotResponse = [];
    response = Array.from({ length: 10 }, () => randomKatakanaWord());

    ctx.response.body = response;
}
