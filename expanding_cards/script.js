
// Here, we have added eventListener to each panel div. Instead we can attach eventListener to the parent container 
// and target the child element which will help in optimization when we have large no. of children element that requires
// eventListener. Maybe I will do that sometime later....
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', ()=>{
    removeActiveClassName();
    panel.classList.add('active');
  }) 
})

const removeActiveClassName = () =>{
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}
