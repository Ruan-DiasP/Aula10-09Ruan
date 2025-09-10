let canv = document.getElementById("meu");
let ctx = canv.getContext("2d");

let posX = 300;
let posY = 200;
let radius = 15;
let speedX = Math.random() * 10 - 5;
let speedY = Math.random() * 10 - 5;

function Desenha(){

    ctx.clearRect(0, 0, canv.width, canv.height )
    posX += speedX;
    posY += speedY;
    if (posX > canv.width - radius || posX < radius)
        speedX = -speedX;
    if (posY > canv.height - radius || posY < radius)
        speedY = -speedY;
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(posX, posY, 10, 0, 2*Math.PI);
    ctx.stroke();
}

setInterval(Desenha, 20);