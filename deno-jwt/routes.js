import { Router } from "./deps.js";
import * as jose from 'https://deno.land/x/jose@v4.8.1/index.ts';

const router = new Router();


const { publicKey, privateKey } = await jose.generateKeyPair('PS256');

const publicJwk = await jose.exportJWK(publicKey);

const kid = "asd12355435dfs53"

publicJwk.kid = kid

router.get("/token", async (context) => {
  const jwt = await new jose.SignJWT({ 'urn:example:claim': true, roles: ["user"] })
  .setProtectedHeader({ alg: 'PS256', typ: "JWT", kid: kid })
  .sign(privateKey)


  context.response.body = {
    jwt
  };
});

router.get("/admin/token", async (context) => {
  const jwt = await new jose.SignJWT({ 'urn:example:claim': true, roles: ["admin"] })
  .setProtectedHeader({ alg: 'PS256', typ: "JWT", kid: kid })
  .sign(privateKey)


  context.response.body = {
    jwt
  };
});

router.get("/verify", (context) => {
  context.response.body = {
    keys: [publicJwk]
  };
});

console.log(publicJwk);

export default router;