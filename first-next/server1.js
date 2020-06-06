// server.js (next server) // other server2.js is the express server
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); 

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    //every req coming to the server handled by the "handle" method which is a part of nextjs 
    handle(req, res, parsedUrl);
    /*
    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
    */
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});

//After adding this file we need to make some changes on the package.json.
//Because, we are calling next in this file and creating a next server which is listening 
//port 3000. Since "next" is defined and called here, we no longer need to call "next" from
//package json.