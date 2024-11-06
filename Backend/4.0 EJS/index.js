import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
var finalDeSemana = false;

function saberDiaDaSemana(req, res, next){
    const hoje = new Date();
    if (hoje.getDay() === 0 || hoje.getDay() === 7) { finalDeSemana = true; }
    else                                            { finalDeSemana = false; }
    
    next();
}

app.use(saberDiaDaSemana);

app.get("/" , (req, res) => {
    res.render("index.ejs" , { x: finalDeSemana } );
});

app.listen( port, () => {
    console.log(`Listening on port ${port}`);
});