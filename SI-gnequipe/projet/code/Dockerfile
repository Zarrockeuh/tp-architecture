# Stage 1: Build an Angular Docker Image
FROM node as build

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app

ARG configuration=production

RUN npm run build -- --outputPath=./dist/code --configuration ${configuration}


# Stage 2, use the compiled app, ready for production with Nginx

FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/code /usr/share/nginx/html

EXPOSE 8081