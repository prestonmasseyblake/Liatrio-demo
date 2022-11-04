FROM node:16
WORKDIR /liatro
COPY package.json index.js index.html index.css ./
RUN npm install 
EXPOSE 80
CMD ["npm","start"]  
#docker build -t liatro_latest .
# docker run -d -p 80:80 --name node-app liatro_latest 