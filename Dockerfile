FROM node:16.17-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Set the environment variable for running in development mode
ENV NODE_ENV=development

# Expose the port on which your application runs
EXPOSE 4001

# Start the application

CMD ["sh", "-c", "yarn start"]
#CMD ["npm", "run", "dev"]
