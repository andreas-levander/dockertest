# syntax=docker/dockerfile:1
FROM denoland/deno:latest

EXPOSE 8080
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
COPY . .
CMD ["run","--allow-all","server.ts"]

