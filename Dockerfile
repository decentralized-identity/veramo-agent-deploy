FROM node:12
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
ADD config config
RUN yarn
CMD ["yarn", "start"]