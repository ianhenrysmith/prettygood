// serve local page for dev. `node index.js` to run.

const express = require("express")
const app = express()
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.use(express.static("dist"))

app.listen(3303, function () {
  console.log("Products app listening on 3303")
});
