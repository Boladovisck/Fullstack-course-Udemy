// Variáveis
var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColour;
var level = 0;


//Funções

function nextSequence(){ 
    var color =  Math.floor(Math.random() * 4)
    level++;
    randomChosenColour = buttonColours[color]
    flashPLay( randomChosenColour );
    $("#level-title").text("Level " + level);
    gamePattern.push(randomChosenColour);
}

function flashPLay(id){
    switch (id){
        case "red":
            $("#" + id).addClass("pressed");
            break;
        case "blue":
            $("#" + id).addClass("pressed");
            break;
        case "green":
            $("#" + id).addClass("pressed");
            break;
        case "yellow":
            $("#" + id).addClass("pressed");
            break;            
    }
    playSound(id);
    setTimeout(function(){
        $("#" + id).removeClass("pressed")
    },100);
}

function playSound(id){
    var audio = new Audio("./sounds/" + id + ".mp3");
    audio.play();
}

function checkAnswer(currentClick){
    if (gamePattern[currentClick]  ===  userClickedPattern[currentClick]){
        if (currentClick === gamePattern.length - 1 ){ 
            userClickedPattern = [];
            setTimeout(function(){
                nextSequence();
            },400);
        }
    }
    else{ gameOver();}
}

function gameOver(){
    $("#level-title").text("Press A Key to Start");
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
}

//Eventos
$(".btn").click(function(){
    if(level !== 0){
        var id = $(this).attr("id");
        userClickedPattern.push( id );
        flashPLay( id );
        var currentClick = userClickedPattern.length - 1;
        checkAnswer(currentClick);
    }
})

$(document).keypress(function(){
    if (level == 0){
        nextSequence();
    }
})
