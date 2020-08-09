FROM nginx:stable
MAINTAINER AndreFN  "andrenugroho395@gmail.com"

RUN mkdir -p /ecommerce-andreino/www
RUN mkdir -p /ecommerce-andreino/log

COPY default_new.conf /etc/nginx/conf.d/
ADD build/. /ecommerce-andreino/www

WORKDIR /ecommerce-andreino/www
