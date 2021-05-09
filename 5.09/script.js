const whiteButtons = document.querySelectorAll('.whiteButton');
const blackButtons = document.querySelectorAll('.blackButton');
const noteC4 = document.querySelector('#noteC4');
const noteD4 = document.querySelector('#noteD4');
const noteE4 = document.querySelector('#noteE4');
const noteF4 = document.querySelector('#noteF4');
const noteG4 = document.querySelector('#noteG4');
const noteA4 = document.querySelector('#noteA4');
const noteB4 = document.querySelector('#noteB4');
const noteC5 = document.querySelector('#noteC5');
const noteD5 = document.querySelector('#noteD5');
const noteE5 = document.querySelector('#noteE5');

const noteDb4 = document.querySelector('#noteDb4');
const noteEb4 = document.querySelector('#noteEb4');
const noteGb4 = document.querySelector('#noteGb4');
const noteAb4 = document.querySelector('#noteAb4');
const noteBb4 = document.querySelector('#noteBb4');
const noteDb5 = document.querySelector('#noteDb5');
const noteEb5 = document.querySelector('#noteEb5');


document.addEventListener('keydown', function(e){
    whiteButtons.forEach(white => {
        if(e.keyCode === 90 && white.id === 'c4'){
            white.classList.add('bg-gray-400');
            noteC4.currentTime = 0;
            noteC4.play();
        }

        if(e.keyCode === 88 && white.id === 'd4'){
            white.classList.add('bg-gray-400');
            noteD4.currentTime = 0;
            noteD4.play();
        }

        if(e.keyCode === 67 && white.id === 'e4'){
            white.classList.add('bg-gray-400');
            noteE4.currentTime = 0;
            noteE4.play();
        }

        if(e.keyCode === 86 && white.id === 'f4'){
            white.classList.add('bg-gray-400');
            noteF4.currentTime = 0;
            noteF4.play();
        }

        if(e.keyCode === 66 && white.id === 'g4'){
            white.classList.add('bg-gray-400');
            noteG4.currentTime = 0;
            noteG4.play();
        }

        if(e.keyCode === 78 && white.id === 'a4'){
            white.classList.add('bg-gray-400');
            noteA4.currentTime = 0;
            noteA4.play();
        }

        if(e.keyCode === 77 && white.id === 'b4'){
            white.classList.add('bg-gray-400');
            noteB4.currentTime = 0;
            noteB4.play();
        }

        if(e.keyCode === 188 && white.id === 'c5'){
            white.classList.add('bg-gray-400');
            noteC5.currentTime = 0;
            noteC5.play();
        }

        if(e.keyCode === 190 && white.id === 'd5'){
            white.classList.add('bg-gray-400');
            noteD5.currentTime = 0;
            noteD5.play();
        }

        if(e.keyCode === 191 && white.id === 'e5'){
            white.classList.add('bg-gray-400');
            noteE5.currentTime = 0;
            noteE5.play();
        }

        console.log(e.keyCode)
    });

    blackButtons.forEach(function(black){
        if(e.keyCode === 83 && black.id === 'db4'){
            black.classList.add('bg-gray-400');
            noteDb4.currentTime = 0;
            noteDb4.play();
        }

        if(e.keyCode === 68 && black.id === 'eb4'){
            black.classList.add('bg-gray-400');
            noteEb4.currentTime = 0;
            noteEb4.play();
        }

        if(e.keyCode === 71 && black.id === 'gb4'){
            black.classList.add('bg-gray-400');
            noteGb4.currentTime = 0;
            noteGb4.play();
        }

        if(e.keyCode === 72 && black.id === 'ab4'){
            black.classList.add('bg-gray-400');
            noteAb4.currentTime = 0;
            noteAb4.play();
        }

        if(e.keyCode === 74 && black.id === 'bb4'){
            black.classList.add('bg-gray-400');
            noteBb4.currentTime = 0;
            noteBb4.play();
        }

        if(e.keyCode === 76 && black.id === 'db5'){
            black.classList.add('bg-gray-400');
            noteDb5.currentTime = 0;
            noteDb5.play();
        }

        if(e.keyCode === 186 && black.id === 'eb5'){
            black.classList.add('bg-gray-400');
            noteEb5.currentTime = 0;
            noteEb5.play();
        }
    })
});

document.addEventListener('keyup', function(){
    whiteButtons.forEach(white => {
        white.classList.remove('bg-gray-400');
    });

    blackButtons.forEach(black => {
        black.classList.remove('bg-gray-400');
    });
})