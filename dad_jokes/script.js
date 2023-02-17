const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const generateJoke = async() => {
  const config = {
    headers: {
      Accept: 'application/json'
    }
  }
  
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  joke.innerHTML = data.joke;
}

generateJoke();

btn.addEventListener('click', generateJoke);
