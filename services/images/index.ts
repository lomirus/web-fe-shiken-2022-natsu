import { Context } from "https://deno.land/x/oak@v10.5.1/context.ts";

async function handleStatic(ctx: Context, next: () => Promise<unknown>) {
    const filename = ctx.request.url.pathname.split("/")[2];
    try {
        await ctx.send({
            root: `${Deno.cwd()}/images`,
            path: filename,
        });
    } catch {
        next();
    }
}

export { handleStatic as images };