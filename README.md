## All Next Projects

1. first-next (FN)
   A. to create next app run the command `npm install react react-dom next`
   B. the scripts added to package.json:
   "scripts": {
   "dev": "next",
   "build": "next build",
   "start": "next start"
   },
   C. `npm run dev` or `npm run start` throws an error
   D. create "pages" directory under the project root folder
   E: Next creates automatically routes for every file under the "pages" folder. We do not have to use react router, we don not have to define routes explicitly.
   F. _app.js (custom App.js) https://nextjs.org/docs/advanced-features/custom-app
   G. getInitialProps receives a single argument called context, it's an object with the following properties:
      >pathname - Current route. That is the path of the page in /pages
      >query - Query string section of URL parsed as an object
      >asPath - String of the actual path (including the query) shown in the browser
      >req - HTTP request object (server only)
      >res - HTTP response object (server only)
      >err - Error object if any error is encountered during the rendering