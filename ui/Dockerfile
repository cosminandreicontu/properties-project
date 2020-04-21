FROM mhart/alpine-node:8.11.4
WORKDIR /ui
COPY package*.json /ui/
RUN npm install -g npm@5.6.0
RUN npm install
COPY . /client/
EXPOSE 3000
CMD ["npm", "start"]