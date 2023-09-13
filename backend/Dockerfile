# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Create a directory for your app in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build TypeScript source code
RUN npm run build

# Expose the port your app will run on
EXPOSE 8080

# Define the command to run your app using Node.js
CMD [ "node", "./build/index.js" ]
# This Dockerfile does the following:

# Uses the official Node.js 14 image as the base image.
# Sets the working directory in the container.
# Copies the package.json and package-lock.json files to the container and installs dependencies.
# Copies the rest of your application code to the container.
# Builds your TypeScript source code using npm run build (make sure you have this script defined in your package.json).
# Exposes port 8080 (you can change this to your desired port).
# Defines the command to run your application when the container starts.
# Build the Docker Image: Navigate to your project directory in the terminal and build the Docker image using the docker build command. Replace my-node-app with the desired image name:
# bash
# Copy code
# docker build -t my-node-app .
# Run the Docker Container: After building the image, you can run a Docker container from it. Replace my-node-container with the desired container name:
# bash
# Copy code
# docker run -d -p 8080:8080 --name my-node-container my-node-app


