FROM nginx:stable
MAINTAINER AndreFN  "andrenugroho395@gmail.com"

# RUN mkdir -p /coba/cert
RUN mkdir -p /coba/www
RUN mkdir -p /coba/logs

COPY default_new.conf /etc/nginx/conf.d/
ADD build/. /coba/www
# ADD cert/. /coba/cert

WORKDIR /coba/www
