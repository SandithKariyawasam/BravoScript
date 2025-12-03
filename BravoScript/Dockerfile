# Use a lightweight Node.js version
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first (better for caching)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (usually 3000 or 5173 for Vite)
EXPOSE 3000

# The command to start your app
CMD ["npm", "start"]
