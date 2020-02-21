## First Stage ##
FROM node:latest AS builder
WORKDIR /usr/src/app/
COPY ./package.json ./
RUN npm install
COPY . .
RUN ["npm","run","build"]

## Second Stage ##
FROM nginx
EXPOSE 80
WORKDIR /usr/share/nginx/html/
RUN rm -rf ./*
COPY --from=builder /usr/src/app/dist/student-data .
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
