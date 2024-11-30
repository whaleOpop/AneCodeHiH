FROM node:18 AS build

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23

COPY --from=build ../dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
