FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run prod-build

FROM nginx:alpine

COPY --from=build /app/dist/manati-landing-page/browser/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]