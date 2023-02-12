const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentPosition = 1;

next.addEventListener('click', ()=>{
  currentPosition++;
  if(currentPosition > circles.length){
    currentPosition = circles.length;
  }
  update();
})

prev.addEventListener('click', ()=>{
  currentPosition--;
  if(currentPosition < 1){
    currentPosition = 1;
  }
  update();
})

const update = () =>{
  circles.forEach((circle, idx) =>{
    if(idx < currentPosition){
      circle.classList.add('active');
    }
    else{
      circle.classList.remove('active');
    }
  })
  progress.style.width = 100/(circles.length-1)*(currentPosition-1) + '%';
  if(currentPosition === 1){
    prev.disabled = true;
  }
  else if(currentPosition === circles.length){
    next.disabled = true;
  }
  else{
    prev.disabled = false;
    next.disabled = false;
  }
}
