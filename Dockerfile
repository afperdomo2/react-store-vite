# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory /app in the container
COPY package*.json ./

# Install the application dependencies inside the container
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Build the application
RUN npm run build

# Install a simple http server to serve the built application
RUN npm install -g serve

# Expose port 5000 for the http server
EXPOSE 5000

# Start the http server
CMD ["serve", "-s", "dist", "-l", "5000"]