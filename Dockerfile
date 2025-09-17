# Use Node.js Alpine image (lightweight)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json (better for caching layers)
COPY package.json .

# Install dependencies (none here, but keeps structure correct)
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

