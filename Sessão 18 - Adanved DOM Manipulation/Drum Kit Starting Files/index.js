
//Adicionando botões num array e colocando o listener neles
var botoes = document.querySelectorAll(".drum");

for ( var cont = 0;cont < botoes.length; cont++){
    botoes[cont].addEventListener("click", function (){
        var texto = this.innerHTML;
        makeSound(texto);
        flashButton(texto);
    });
}

document.addEventListener("keydown",function (event){
    makeSound(event.key);
    flashButton(event.key);

})


function makeSound(key){
        switch (key){
            case "w":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;

            case "a":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;

            case "s":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;

            case "d":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;

            case "j":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;

            case "k":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;

            case "l":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;

            default: 
                console.log(this);
        }
}

function flashButton(key){
    var activeKey = document.querySelector("." + key);
    console.log(activeKey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100)
}