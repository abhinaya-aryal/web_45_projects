const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

function doTrick(theClickedOne) {
  if(good.checked && cheap.checked && fast.checked){
    if(theClickedOne === good){
      fast.checked = false;
    }
    if(theClickedOne === cheap) {
      good.checked = false;
    }
    if(theClickedOne === fast) {
      cheap.checked = false;
    }
  }
}

toggles.forEach(toggle => {
  toggle.addEventListener('input', (e) => doTrick(e.target));
})

