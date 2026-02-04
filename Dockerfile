# 1. Use Node.js
FROM node:18-alpine

# 2. Set the container working directory
WORKDIR /app

# 3. Copy the ENTIRE repository into the container
# This puts the 'BravoScript' folder inside /app/BravoScript
COPY . .

# 4. CHANGE DIRECTORY into your project folder
WORKDIR /app/BravoScript

# 5. Install dependencies
RUN npm install

# 6. Build the React App (Creates a 'build' or 'dist' folder)
RUN npm run build

# 7. Install a simple static file server
RUN npm install -g serve

# 8. Set Port (React apps don't use this env var natively, but 'serve' does)
ENV PORT=80

# 9. Expose Port 80
EXPOSE 80

# 10. Start the server pointing to the 'build' folder
# If your project creates a 'dist' folder instead (Vite), change 'build' to 'dist'
CMD ["serve", "-s", "build", "-l", "80"]