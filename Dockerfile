FROM node:18-alpine

WORKDIR /react-app

COPY package.json .

COPY . .

CMD npm start


# docker image build -t portfolio-img .        
# docker run -d -p 80:80 img-site:latest       