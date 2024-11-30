FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.23

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["npm", "run", "preview"]
