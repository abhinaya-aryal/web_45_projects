const toasts = document.querySelector('.toasts');
const button = document.querySelector('.button');

const messages = ["Hello World !", "Long Live !", "Have a Fun !", "Yet to be done"];
const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createToast());

function createToast(message = null, type = null) {
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.classList.add(type ? type : getRandomType());
  toast.innerText = message ? message : getRandomMessage();
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * messages.length)];
}
