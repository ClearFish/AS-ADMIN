FROM nginx 

COPY ./dist /data 

RUN rm /etc/nginx/conf.d/default.conf

ADD as-ui.conf /etc/nginx/conf.d/default.conf

RUN /bin/bash -c 'echo init ok'