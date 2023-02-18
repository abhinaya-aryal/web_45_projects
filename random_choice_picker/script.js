const tags = document.getElementById('tags');
const textarea = document.getElementById('textarea');

const createTags = (input) => {
 const tag = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
 tags.innerHTML= '';
 tag.forEach(item => {
   const tagEl = document.createElement('span');
   tagEl.classList.add('tag');
   tagEl.innerText = item;
   tags.appendChild(tagEl);

 })
}

const randomSelect = () => {
  const times = 20;
  const interval = setInterval(()=>{
    const randomTag = pickRandomTag();
    highlightTag(randomTag);
    setTimeout(()=>{
    unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(()=>{
    clearInterval(interval);
    setTimeout(()=>{
      const randomtag = pickRandomTag();
      highlightTag(randomtag);
    }, 100)
    }, times * 100)
}

const pickRandomTag= () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

const highlightTag = (tag) => {
  tag.classList.add('highlight');
}

const unhighlightTag = (tag) => {
  tag.classList.remove('highlight');
}

textarea.focus();

textarea.addEventListener('keyup', (e)=>{
  createTags(e.target.value);
  if(e.key === 'Enter'){
    setTimeout(()=>{
     e.target.value = '';
    }, 10);
    randomSelect();
  }
})
