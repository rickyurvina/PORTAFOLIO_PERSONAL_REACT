#stage 1
FROM node:latest as node

WORKDIR /usr/src/app

COPY . .

RUN npm install  && npm run build

#stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80

