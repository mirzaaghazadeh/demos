# demos.navid.tr — static site. Nothing is built; the repo IS the site.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

# Files that belong to the repo, not to the site.
RUN rm -rf /usr/share/nginx/html/.git \
           /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/docker-compose.yaml \
           /usr/share/nginx/html/nginx.conf \
           /usr/share/nginx/html/.dockerignore \
    && find /usr/share/nginx/html -name '.DS_Store' -delete \
    && nginx -t

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null 2>&1 || exit 1
