const labels = document.querySelectorAll('.form-control label');

labels.forEach(label =>{
  let letters = label.innerText.split('');
  letters = letters.map((letter, index) =>{
    return `<span style="transition-delay: ${index * 40}ms">${letter}</span>`;
  })
  label.innerHTML = letters.join('');
})
