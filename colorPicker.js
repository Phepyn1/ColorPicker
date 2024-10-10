const c = document.getElementById("matriz");
const ctx = c.getContext("2d");

const l = document.getElementById("line");
const ltx = l.getContext("2d");

const select = document.getElementById('selecao');


let clicando = false;
let color = 'purple'

// Criando gradiente para o canvas principal
function Grad(cor){
const grad = ctx.createLinearGradient(0, 0, c.width, 0);
grad.addColorStop(0, "white");
grad.addColorStop(1, cor);

ctx.fillStyle = grad;
ctx.fillRect(0, 0, c.width, c.height);

const gradB = ctx.createLinearGradient(0, 0, 0, c.height);
gradB.addColorStop(0, 'rgba(255,255,255,0');
gradB.addColorStop(0.5, 'rgba(255,255,255,0');
gradB.addColorStop(0.5, 'rgba(0,0,0,0');
gradB.addColorStop(1, 'rgba(0,0,0,1');

ctx.fillStyle = gradB;
ctx.fillRect(0, 0, c.width, c.height);
}

Grad(color)
// Criando gradiente para o canvas de linha
function GradL(){
const linha = ltx.createLinearGradient(0, 0, l.width, 0);
linha.addColorStop(0, "rgb(255,0,0)");
linha.addColorStop(0.15, "rgb(255,0,255)");
linha.addColorStop(0.32, "rgb(0,0,255)");
linha.addColorStop(0.46, "rgb(0,255,255)");
linha.addColorStop(0.63, "rgb(0,255,0)");
linha.addColorStop(0.78, "rgb(255,255,0)");
linha.addColorStop(1, "red");

ltx.fillStyle = linha;
ltx.fillRect(0, 0, l.width, l.height); // Preenchendo todo o canvas
}

GradL()

function desenharSeletor(x, y){
    ctx.clearRect(0, 0, l.width, l.height);
    Grad(color)
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.stroke();
}

function desenharSlide(x, y){
    ltx.clearRect(0, 0, l.width, l.height);
    GradL()
    ltx.beginPath();
    ltx.rect(x, 0, 0, l.height);
    ltx.strokeStyle = "white";
    ltx.lineWidth = 4;
    ltx.stroke();
}


function AtualizaCor(x,y){

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    desenharSeletor(x,y)
    select.style.background = color;
}


function selecionarCor(x,y){
    const pixel = ltx.getImageData(x, y, 1, 1).data;
    color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    Grad(color)
    desenharSlide(x, y);
}


c.addEventListener('mousedown', (event) => {
    clicando = true;
    AtualizaCor(event.offsetX, event.offsetY);
})

c.addEventListener('mousemove', (event) => {
    if(clicando){
    AtualizaCor(event.offsetX, event.offsetY);
    }
})

c.addEventListener('mouseup', (event) => {
    clicando = false;
})


l.addEventListener('mousedown', (event) => {
    clicando = true;
    selecionarCor(event.offsetX, event.offsetY);
})

l.addEventListener('mousemove', (event) => {
    if(clicando){
        selecionarCor(event.offsetX, event.offsetY);
    }
})

l.addEventListener('mouseup', (event) => {
    clicando = false;
})
