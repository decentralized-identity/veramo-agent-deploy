FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
ADD config config
RUN yarn install --production
CMD ["yarn", "start"]
EXPOSE 3332