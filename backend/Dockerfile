FROM node:16.16-alpine
WORKDIR app
COPY . .
RUN npm install --force
RUN npm run test
EXPOSE 8000
EXPOSE 80
CMD ["node","app.js"]
