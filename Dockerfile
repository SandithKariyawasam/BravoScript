# 1. Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json first (for better caching)
COPY BravoScript/package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of your application code
COPY BravoScript/ .

# 6. CRITICAL: Set the environment variable for Port to 80
# Your Go Backend expects the container to listen on Port 80
ENV PORT=80

# 7. Expose port 80 to the outside world
EXPOSE 80

# 8. Define the command to run your app
# (Ensure your package.json has a "start" script, e.g., "node index.js")
CMD ["node", "index.js"]