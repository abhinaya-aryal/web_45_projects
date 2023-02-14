const background = document.querySelector('.background');
const label = document.querySelector('.label');

let load = 0;


const scale = (number, inMin, inMax, outMin, outMax) =>{
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const effect = () =>{
  load++;
  console.log(load);
  if(load > 99){
    clearInterval(blurring);
  }

  label.innerText = `${load}%`;
  label.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const blurring = setInterval(effect, 20);





