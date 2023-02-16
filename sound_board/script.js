const sounds = ['boo', 'gasp', 'tada', 'applause', 'victory', 'wrong'];

const stopSongs = () => {
  sounds.forEach(sound =>{
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })
}

sounds.forEach(sound =>{
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', ()=>{
    stopSongs();
    document.getElementById(sound).play();
  })
  document.querySelector('.box-container').append(btn);
})


