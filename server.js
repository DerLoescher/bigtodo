const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();
const jsonServer = require("json-server");
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
const staticFileMiddleware = express.static(path.join(__dirname + "/dist"));

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

app.get("/", function (req, res) {
  res.render(path.join(__dirname + "/dist/index.html"));
});

let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

// const jsonServer = require("json-server");
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//   })
// );
