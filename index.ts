import { Application, Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as services from "./services/index.ts";


const router = new Router();
router
    .get("/recommendations", services.recommendations)
    .get("/search", services.search)
    .get("/ranking", services.ranking);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
        `Listening on: ${secure ? "https://" : "http://"}${hostname ??
        "localhost"
        }:${port}`,
    );
});

await app.listen({ port: 8000 });
