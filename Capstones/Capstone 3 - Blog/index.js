import express from "express";
import bodyParser from "body-parser";
import { render } from "ejs";

const app = express();
const port = 3000;
var lastCont;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var cardList = []

var card = {
    tag : "teste",
    title : "teste",
    description : "eofneonfpnpdm mpmd m 2 dm 2md 2m d 2dn n",
    date : new Date().getUTCDate(),
    text: "dqdqfqfwff2f2f1f12f1f1f2f1f1f1f1",
}

cardList.push(card);
cardList.push(card);
cardList.push(card);
cardList.push(card);


app.get("/", (req,res) =>{
    res.render("index.ejs",{cardList});
});

app.get("/form", (req,res) => {
    res.render("form.ejs");
});

app.post("/post", (req,res) => {
    const data = req.body;
    lastCont = Number(data.postID);
    card = cardList[lastCont];
    console.log(card);
    res.render("post.ejs",card);
});

app.post("/save" , (req,res) => {
    const data = req.body;
    let newCard = {};
    
    newCard.tag = data.postTag;
    newCard.title = data.postTitle;
    newCard.description = data.postDescription;
    newCard.text = data.postBody;

    cardList.push(newCard);

    res.render("index.ejs",{cardList});

});

app.post("/edit", (req,res) =>{
    const data = req.body;
    let newCard = {};
    
    newCard.tag = data.postTag;
    newCard.title = data.postTitle;
    newCard.description = data.postDescription;
    newCard.text = data.postBody;

    cardList[lastCont] = newCard;

    res.render("index.ejs",{cardList});
})

app.get("/del", (req,res) =>{
    cardList.splice(lastCont,1);
    res.render("index.ejs",{cardList});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});