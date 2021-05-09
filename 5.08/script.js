// DOM events => click, key down

// create Element => html tag uusgene,
// appendChild, remove()
// event function

// onclick,, ondblclick, onmouseover
// event listener 1. click, 2. () callback

// document.addEventListener('click', function(e){
//     console.log(e);
// })


const btn = document.querySelector('#addBtn');
const boxContainer = document.querySelector('#boxContainer');
const input = document.querySelector('#insertPhoto');

btn.addEventListener('click', function(){
    const divTag = document.createElement('div');
    const closeBtn = document.createElement('button');
    closeBtn.className = 'transition duration-300 hover:bg-red-400 hover:text-white border border-white focus:outline-none absolute rounded-full top-3 right-3 py-3 px-5 bg-white text-red-400';
    divTag.className = 'h-48 bg-red-400 rounded-3xl bg-center relative bg-cover bg-no-repeat';
    divTag.id = 'box';
    closeBtn.id = 'delete';

    closeBtn.innerText = 'x';
    
    divTag.style.backgroundImage = `url(${input.value})`;
    divTag.appendChild(closeBtn);

    boxContainer.appendChild(divTag);
    input.value = '';
});

document.addEventListener('click', function(e){
    if(e.target.id === 'delete'){
        e.target.parentNode.remove();
    }

    if(e.target.id === 'box'){
        console.log(e.target.style.backgroundImage.split(`"`)[1]);
    }
});