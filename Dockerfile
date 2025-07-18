# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json files to the container
COPY package*.json .

# Copy the rest of the application code
COPY . .

# Install the dependencies
RUN npm install

# Copy the prisma schema before generating the client
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Expose the port that the app runs on
EXPOSE 5003

# Define the command to run your application
CMD ["node", "./src/server.js"]
