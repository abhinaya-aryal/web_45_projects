window.addEventListener('keydown', (event) => {
  const insert = document.querySelector('.insert');
  insert.innerHTML = `<div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>`
  console.log(event);
})
