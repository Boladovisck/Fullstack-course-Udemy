import express from "express";
const app = express();
const port = 3000;

app.listen( port, () => {
    console.log(`Servidor ligado na porta ${port}`);
})

