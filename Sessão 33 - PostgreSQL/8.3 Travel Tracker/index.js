import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "aranha20",
  port: 5432,
});
let countries = [];

db.connect();
db.query("SELECT country_code FROM visited_countries", (err, res) => {
  if (err){
    console.error("Error executing query", err.stack);
  } else {
    res.rows.forEach((country) => {
      countries.push(country.country_code);
    });
  }
 
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs", {countries: countries, total: countries.length})
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );
    if (result.rows.length !== 0){
      console.log("aqui");
      const data = result.rows[0];
      const countryCode = data.country_code;
      try{
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
        console.log("aqui");
        countries.push(countryCode);
        res.redirect("/");
      }catch (err) {
        console.log(err);
        res.render("index.ejs", {
        countries : countries,
        total: countries.length,
        error: "Country has alredy been added, try again.",
        });
      }
      
    }
  } catch (err){
    console.log(err);
    res.render("index.ejs", {
      countries : countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    })
  }
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
