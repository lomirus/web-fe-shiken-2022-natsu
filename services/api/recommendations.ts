import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import type { SongList } from "../../types.ts";

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
            cover: "https://img.xjh.me/random_img.php",
            title: `官方${i}号歌单`,
            views: 0,
        })),
        tatsujin: Array.from({ length: 6 }, (_, i) => ({
            cover: "https://img.xjh.me/random_img.php",
            title: `达人${i}号歌单`,
            views: 0,
        })),
        column: Array.from({ length: 9 }, (_, i) => ({
            title: `${i}号专区`,
            description: `这个学长很懒，什么描述都没有写`,
            icon: `/images/${Math.floor(Math.random() * 884) + 1}.svg`,
            background: "https://img.paulzzh.com/touhou/random",
        })),
    };
    ctx.response.body = response;
}
