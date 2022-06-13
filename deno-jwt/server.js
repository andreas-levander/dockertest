import { Application } from "./deps.js";
import router from "./routes.js";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port 4000`);

await app.listen({ port: 4000 });
