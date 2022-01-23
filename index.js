const expres = require("express");
const admin = require("./verify");
const app = expres();
app.use(expres.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/", admin, (req, res) => {
  console.log("post request");
  res.send("admin acess");
});
app.listen(4000, () => {
  console.log("app running");
});
