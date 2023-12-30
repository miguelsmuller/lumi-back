FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
RUN npm run build


FROM node:alpine AS runtime
WORKDIR /app
COPY --from=build  /app/dist ./
COPY package.json /app/
RUN ["npm","install","--omit=dev"]

ENTRYPOINT ["node", "./app.js"]
