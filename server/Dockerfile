FROM mhart/alpine-node:8.11.4
WORKDIR /server
COPY package*.json /server/
RUN npm install -g npm@5.6.0
RUN npm install
COPY . /server/
EXPOSE 5000
CMD ["npm", "start"]