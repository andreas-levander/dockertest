# syntax=docker/dockerfile:1
FROM devopsfaith/krakend as builder
ARG ENV=prod

COPY config .

# Save temporary file to /tmp to avoid permission errors
RUN FC_ENABLE=1 \
    FC_OUT=/tmp/krakend.json \
    FC_PARTIALS="/etc/krakend/partials" \
    FC_SETTINGS="/etc/krakend/settings/" \
    FC_TEMPLATES="/etc/krakend/templates" \
    krakend check -d -t -c krakend.json

FROM devopsfaith/krakend
COPY --from=builder --chown=krakend /tmp/krakend.json .
