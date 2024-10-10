const c = document.getElementById("matriz");
const ctx = c.getContext("2d");

const l = document.getElementById("line");
const ltx = l.getContext("2d");

const select = document.getElementById('selecao');

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

Grad("red")
// Criando gradiente para o canvas de linha
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

// Evento para capturar a cor na posição do clique no canvas principal
c.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    select.style.background = color;
});

// Evento para capturar a cor na posição do clique no canvas de linha
l.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    const pixel = ltx.getImageData(x, y, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    Grad(color)
});
