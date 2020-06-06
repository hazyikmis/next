// server.js (next server) // other server2.js is the express server
const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); 

app.prepare().then(() => {
  const server = express();

  //this code below is enough to connect all static pages with nodejs routes.
  //in each request to express app/server, this request "handle"d to the next app
  server.get("/lol", (req, res) => {
    res.send("YOU'VE HIT LOL!!!")
  })

  server.get("/p/:id", (req, res) => {
    //app.render(req, res, "/about")
    
    //app.render(req, res, "/post", {id: req.params.id})
    //{id: req.params.id} is now accessible as "query" from the Post.getInitialProps = async ({ query }) => {...} static function in the post.js
    //we can send many parameters as props, like {id: req.params.id, color: "pink", mood: "crazy", level: -1}
    //All these query params send to Post.getInitialProps as props 
    app.render(req, res, "/post", req.params) //this is the best method, because all query params exist in req.params :), destructuring is enough on the other side
  })

  //all routes (except the custom routes above) handed over to next app
  server.get("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Now serving on htt://localhost:3000")
  })
});

//After adding this file we need to make some changes on the package.json.
//Because, we are calling next in this file and creating a next server which is listening 
//port 3000. Since "next" is defined and called here, we no longer need to call "next" from
//package json.