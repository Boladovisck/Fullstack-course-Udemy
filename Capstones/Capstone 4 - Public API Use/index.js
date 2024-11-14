import axios from "axios";
import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "c61a7ce88b21378538b3e9d1675bd099";



app.use(express.static('Public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req,res) =>{
    res.render("index.ejs");
})

app.post("/getweather", async (req, res) => {
    const data = req.body;
    try{
        const content = await axios.get(`${API_URL}lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}`);
        res.render("index.ejs" , {content: content.data.weather[0].description});
    }catch(error){
        res.render("index.ejs", {content : error.message});
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

