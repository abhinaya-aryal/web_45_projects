const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rigthBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0;
  }
  else if(idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

function run() {
  idx++;
  changeImage();
}

let interval = setInterval(run, 2000);

rigthBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
})

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
})




