# syntax=docker/dockerfile:1
FROM denoland/deno:latest

EXPOSE 4000
WORKDIR /app
USER deno
COPY deps.js .
RUN deno cache deps.js
COPY . .
CMD ["run","--allow-all","server.js"]

