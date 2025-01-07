FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]  

# Use a lightweight Node.js base image
# FROM node:14-alpine

# # Set the working directory
# WORKDIR /app

# # Copy the build folder from the local machine to the Docker image
# COPY build/ /app/build/

# # Install a simple HTTP server to serve the static content
# RUN npm install -g serve

# # Set the command to run the server when the container starts
# CMD serve -s build

# # Expose the port that the server will be listening on
# EXPOSE 3000
