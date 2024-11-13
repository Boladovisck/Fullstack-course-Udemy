import axios from "axios";
import express from "express";


const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/3.0/onecall?";

app.use(express.static('Public'));




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

