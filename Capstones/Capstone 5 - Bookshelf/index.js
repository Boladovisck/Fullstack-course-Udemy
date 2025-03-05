import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Bookshelf",
  password: "aranha20",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.post("/add", async (req, res) => {
    const book = req.body.newBook;
    try {
      await db.query("INSERT INTO books (title) VALUES ($1)", [item]);
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
});

