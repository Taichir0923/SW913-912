const openBtn = document.querySelector('#btn');
const closeBtn = document.querySelector('#close');
const ball = document.querySelector('#menu');

openBtn.onclick = () => {
    ball.classList.add('open');
}

closeBtn.onclick = () => {
    ball.classList.remove('open');
}