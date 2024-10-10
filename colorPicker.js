const c = document.getElementById("matriz");
const ctx = c.getContext("2d");

// Create gradient
const grad=ctx.createRadialGradient(150,75,15,150,75,150);
grad.addColorStop(0,"lightblue");
grad.addColorStop(1,"darkblue");

// Fill rectangle with gradient
ctx.fillStyle = grad;
ctx.fillRect(10,10,280,130);