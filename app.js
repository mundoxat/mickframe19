const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const dots = Array.from({length: 60}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: (Math.random() - .5) * .3,
  dy: (Math.random() - .5) * .3
}));

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d => {
    d.x += d.dx;
    d.y += d.dy;
    if(d.x<0||d.x>canvas.width) d.dx*=-1;
    if(d.y<0||d.y>canvas.height) d.dy*=-1;
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle = "#00ffe088";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}

animate();
