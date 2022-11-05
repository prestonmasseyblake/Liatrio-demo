FROM node:16
WORKDIR /liatrio 
COPY package.json index.js index.html /public ./
RUN npm install 
EXPOSE 80
CMD ["npm","start"]  
#docker build -t liatrio_latest .
# docker run -d -p 80:80 --name node-app liatrio_latest 