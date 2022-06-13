import { Router } from "./deps.ts";

const router = new Router();

router.get("/api/test", (context) => {
  context.response.body = {
    success: true,
    msg: "Hello World",
  };
});

router.get("/api/prot", (context) => {
  context.response.body = {
    success: true,
    msg: "protected Hello World",
  };
});

export default router;