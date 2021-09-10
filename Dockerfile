FROM node:14.16.1

# FROM node:alpine  

COPY . ./

RUN npm install 

# RUN apk add --update redis

# CMD [ "redis-server" ]

CMD ["npm", "start"]