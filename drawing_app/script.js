const canvas = document.getElementById('canvas');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const label = document.getElementById('label');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = parseInt(label.innerText);
let color = colorEl.value;
let isPressed = false;
let x;
let y;

decrease.addEventListener('click', (e) => {
  size--;
  if(size <= 8){
    size = 32;
  }
  label.innerText = size;
})

increase.addEventListener('click', () => {
  size++;
  if(size >= 32){
    size = 8;
  }
  label.innerText = size;
})

colorEl.addEventListener('change', () => {
  color = colorEl.value;
})

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
  if(isPressed){
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
})

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}



