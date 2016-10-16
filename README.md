# node-express-skeleton
## Intro
Simple skeleton I've used a couple times (e.g. for the React tutorial) and really easy to set up.

If you want a new server app, copy the example, change the route to serve your index.html, and voila, 2 minutes and everything's set up.

## Pre-req's
Node and npm

## Setup
1. Copy or clone project to computer.

2. Install the dependencies listed in package.json, e.g. in the command prompt, nav to node-express-skeleton/server and `npm install`

4. After that's done, stay in the same folder and run `node app.js`

5. Go to http://localhost:3000/app to view the quickie index.html I whipped up. If it loads, you're all set!

## Code of interest
* Serving the index page (see server/app.js)
* Serving js, css, etc (see server/app.js and the client folder)
* Api endpoints - controllers/apiControllers.js for the example endpoints, server/app.js for how those get put onto the Express app.
  * Importing `node-express-skeleton.postman_collection.json` into Postman sets you up to hit these endpoints.
  * GET /app/api/v1
  * POST /app/api/v1 using `{'name' : myName, 'count' : myCount}`
  * GET /app/api/v1/text

# Last thoughts
If you're diving into the code and want a place to start, the server/app.js has most of the interesting stuff. I put a bunch of comments - hopefully that leads you to the pieces you're interested in.

This isn't the most barebones examples... but there really isn't much extra fluff to it either. Happy coding!
