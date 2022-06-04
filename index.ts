import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as services from "./services/index.ts";

const apiRouter = new Router();
apiRouter
    .get("/recommendations", services.api.recommendations)
    .get("/search", services.api.search)
    .get("/ranking", services.api.ranking);

const rootRouter = new Router();
rootRouter
    .get("/images/icons/:path", services.handleIcons)
    .get("/images/covers/:path", services.handleCovers)
    .get("/api", apiRouter.routes())

const app = new Application();

app.use(async (ctx, next) => {
    ctx.response.headers.set("Access-Control-Allow-Origin", "*");
    await next();
})
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"
        }:${port}`,
    );
});

await app.listen({ port: 8000 });
