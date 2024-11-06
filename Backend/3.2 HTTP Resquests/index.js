import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)  => {
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req,res)  => {
    res.send("<h1>About Page</h1> <p>João Vitor</p>");
})

app.get("/contact", (req,res)  => {
    res.send("<h1>Contact Page</h1> <p>3474 0732</p>");
})
app.listen( port, () => {
    console.log(`Servidor ligado na porta ${port}`);
})

