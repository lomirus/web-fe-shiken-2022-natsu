import { Context } from "https://deno.land/x/oak@v10.5.1/context.ts";

async function handleIcons(ctx: Context, next: () => Promise<unknown>) {
    const filename = ctx.request.url.pathname.split("/")[3];
    console.log(filename);
    try {
        await ctx.send({
            root: `${Deno.cwd()}/images/icons`,
            path: filename,
        });
    } catch {
        next();
    }
}

async function handleCovers(ctx: Context, next: () => Promise<unknown>) {
    const filename = ctx.request.url.pathname.split("/")[3];
    console.log(filename);
    try {
        await ctx.send({
            root: `${Deno.cwd()}/images/covers`,
            path: filename,
        });
    } catch {
        next();
    }
}

export { handleCovers, handleIcons };