const canva = document.getElementById("canvas")
const ctx = canva.getContext("2d")

ctx.fillStyle = "blue";
ctx.fillRect(0, 200, 100, 100);
ctx.strokeRect(0, 200, 100, 100);

ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(160, 180, 60,0,7);
ctx.stroke();
ctx.fill()
