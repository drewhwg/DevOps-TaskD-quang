FROM node:10

#Create App Directory - fix
WORKDIR /app

#Install Dependencies
COPY package*.json ./

RUN npm install

#Bundle App Source
COPY . .

#Port Number
EXPOSE 8086

#Run App
CMD ["node", "app.js"]