# syntax=docker/dockerfile:1
FROM denoland/deno:latest

EXPOSE 4000
WORKDIR /app
USER deno
COPY deps.js .
RUN deno cache deps.js
# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache server.js

CMD ["run","--allow-all","server.js"]

