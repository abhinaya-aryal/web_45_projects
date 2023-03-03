const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const panel = document.getElementById('panel');
const ratingContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied';

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}

ratingContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')){
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
})

btn.addEventListener('click', (e) => {
  panel.innerHTML = `
  <i class="fa-solid fa-heart"></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>
  `
})
