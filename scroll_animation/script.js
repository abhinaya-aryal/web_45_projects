const boxes = document.querySelectorAll('.box');

const showBox = () =>{
  const triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  })
}

showBox();

window.addEventListener('scroll', showBox); 
