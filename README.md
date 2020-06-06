## All Next Projects

1. first-next (FN)
   1. to create next app run the command `npm install react react-dom next`
   2. the scripts added to package.json:
   "scripts": {
      "dev": "next",
      "build": "next build",
      "start": "next start"
      },
   3. `npm run dev` or `npm run start` throws an error
   4. create "pages" directory under the project root folder
   5. Next creates automatically routes for every file under the "pages" folder. We do not have to use react router, we don not have to define routes explicitly.
   6. _app.js (custom App.js) https://nextjs.org/docs/advanced-features/custom-app
   In _app.js, we are creating an MyApp component.
   IN EVERY ROUTE, ALL PAGES/ROUTES RENDERED INSIDE THIS MyApp Component. Means, this is a wrapper class / hoc for all pages. So its a beautiful place to put Navbar, footer etc inside here and think this component as a LAYOUT for all pages/routes
   7. getInitialProps receives a single argument called context, it's an object with the following properties:
      - pathname - Current route. That is the path of the page in /pages
      - query - Query string section of URL parsed as an object
      - asPath - String of the actual path (including the query) shown in the browser
      - req - HTTP request object (server only)
      - res - HTTP response object (server only)
      - err - Error object if any error is encountered during the rendering
   8. After adding server.js file we need to make some changes on the package.json. Because, we are calling next in this file and creating a next server which is listening port 3000. Since "next" is defined and called from this server file, we no longer need to call "next" from package json:
   "scripts": {
      "dev": "node server1.js",
      "build": "next build",
      "start": "NODE_ENV=production node server1.js"
      }