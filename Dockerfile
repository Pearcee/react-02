
June 19, 2022
•
3 min read
Dockerizing a React app
So you have a React app. And you want to serve it through Docker.

Let's do that!

At the end of this tutorial, you'll have a Docker container running your app that you can deploy as you see fit 👌

We're going to start from an existing app - a barebones app, using just Webpack and React. Find the starter code on Github or follow a step by step tutorial to setup the app.

Step 1: Building a Docker image
To build a Docker image, we want to copy all the source files inside the container, build the project (also inside the container) and then serve the build folder.

Let's start by ignoring the files that we never want to copy to the docker image. For this, we'll create a .dockerignore file in the root of the project:

// .dockerignore
node_modules
build

Next, let's define our Docker container by creating a Dockerfile in the root of the project:

// Dockerfile

# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:16-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
CMD [ "npx", "serve", "build" ]
Notes

Using `alpine` flavour of an image (e.g. `node:16-alpine` instead of `node:16`) will give you a smaller image size
Check what the latest LTS Node version is and use that Docker image. At the time of writing of this article, it was Node 16
For simplicity, we're just serving the app with npx serve for now. Step 2 will add nginx, so stay tuned!
Ok, let's build the Docker image and run it, to make sure everything works.

# Build the Docker image for the current folder 
# and tag it with `dockerized-react`
docker build . -t dockerized-react

# Check the image was created
docker images | grep dockerized-react

# Run the image in detached mode 
# and map port 3000 inside the container with 3000 on current host
docker run -p 3000:3000 -d dockerized-react
Now open the app at http://localhost:3000 - you should see "Hello from React" 😀


Step 2 - Serve the app through nginx
While serving the app with serve is ok for small apps, it's common to just use nginx to serve the static files, so let's set that up as well.

Also, while we're at it, we'll separate the "build" and "run" steps of creating the Docker image by taking advantage of Docker image layers. This allows us to run the build in a node image and server the app using an nginx image.

To begin, let's create an nginx.conf file in the root of the project:

// nginx.conf

server {
  listen 80;

  location / {
    root /usr/share/nginx/html/;
    include /etc/nginx/mime.types;
    try_files $uri $uri/ /index.html;
  }
}
Next, let's update the Dockerfile to with separate layers and serving the app with nginx:

FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]