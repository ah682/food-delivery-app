# Use Node.js for building the Angular app
FROM node:18 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the Angular app
COPY . .
RUN npm run build --configuration=production

# Use Nginx to serve the built frontend
FROM nginx:latest

# Copy the built Angular files to Nginx's public folder
COPY --from=build /app/dist/food-delivery-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
