# syntax=docker/dockerfile:1
FROM denoland/deno:latest

EXPOSE 3000
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
COPY . .
CMD ["run","--allow-all","server.ts"]

