FROM node:16
WORKDIR /liatro
COPY package.json index.js index.html index.css ./
RUN npm install 
EXPOSE 3000
CMD ["npm","start"]  
#docker buit -t liatro .
# docker run -d -p 3000:3000 --name node-app liatro 