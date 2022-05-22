FROM node:18-alpine AS development

# Add a work directory
WORKDIR /

# Cache and Install dependencies
COPY package*.json ./

RUN npm install

# Copy app files
COPY . .

RUN npm run build

FROM node:18-alpine As production
WORKDIR /
COPY package*.json ./
RUN npm ci --only=production
COPY . .
COPY --from=development /dist ./dist

# Expose port
EXPOSE 8080

# Start the app
CMD ["node", "dist/index.js"]