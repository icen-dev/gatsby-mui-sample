FROM node:16-alpine
WORKDIR /usr/src/app

RUN apk update && \
    apk add git && \
    yarn global add gatsby-cli \
    && rm -rf /var/lib/apt/lists/* \
    gatsby options set package-manager yarn

EXPOSE 8000 9000