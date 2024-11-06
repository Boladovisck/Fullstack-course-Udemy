import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var fName = 0;
var lName = 0;
var total = 0;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(total)
  res.render("index.ejs",{total});
});

app.post("/submit", (req, res) => {
  fName = req.body.fName.length;
  lName = req.body.lName.length;
  total = fName + lName;
  console.log(req);
  res.render("index.ejs",{total});
});

app.listen(port, () => {

  console.log(`Server running on port ${port}`);
});
