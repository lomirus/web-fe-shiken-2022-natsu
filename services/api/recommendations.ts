import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { BASE_URL } from "../../config/index.ts";
import type { SongList } from "../../types.ts";
import { randomInteger } from "../../utils/index.ts";

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
        offical: Array.from({ length: 6 }, (_, i) => ({
            cover: `${BASE_URL}/images/covers/${randomInteger(1, 16)}.jpg`,
            title: `官方${i}号歌单`,
            views: Math.floor(Math.random() * 114514),
        })),
        tatsujin: Array.from({ length: 6 }, (_, i) => ({
            cover: `${BASE_URL}/images/covers/${randomInteger(1, 16)}.jpg`,
            title: `达人${i}号歌单`,
            views: Math.floor(Math.random() * 114514),
        })),
        column: Array.from({ length: 9 }, (_, i) => ({
            title: `${i}号专区`,
            description: `这个学长很懒，什么描述都没有写`,
            icon: `${BASE_URL}/images/icons/${Math.floor(Math.random() * 884) + 1}.svg`,
            background: "https://img.paulzzh.com/touhou/random",
        })),
    };
    ctx.response.body = response;
}
