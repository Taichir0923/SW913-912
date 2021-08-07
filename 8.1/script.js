// document tag uusgeh function

// const newTag = document.createElement("h1");
// newTag.innerHTML = `<span>Hi there!</span>`;
// newTag.classList.add('heading');

// // innerText, textContent
// // innerHTML

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const input = document.querySelector('#input');

const modal = document.querySelector('.modalContainer');
const modalX = document.querySelector('#close');
const modalClose = document.querySelector('#btn__close');

// btn.onclick = function(){
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     const box = document.createElement('div');
//     box.classList.add('box');
//     box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//     container.appendChild(box);

//     // container.insertAdjacentHTML('beforeend', `
//     //     <div style="background-color: rgb(${red}, ${green}, ${blue})" class="box">
//                 // img src={}
//     //     </div>
//     // `)
// }

// 


modalX.addEventListener('click', function(){
    closeModal(true, '')
})

modalClose.addEventListener('click', function(){
    closeModal(true, '')
})

document.addEventListener('click', e => {
    if(e.target.classList.contains('modalContainer')){
        closeModal(true, '')
    }

    if(e.target.classList.contains('box')){
        let source = e.target.style.backgroundImage.split('"')[1];
        closeModal(false, source);
    }
})

btn.addEventListener('click', function(){
    container.insertAdjacentHTML('beforeend',
        `
        <div class="h-64 box rounded-xl overflow-hidden bg-cover bg-center" style="background-image: url(${input.value});">
        </div>
        `
    )
    resetForm();
    // beforebegin - 
    // afterend - 
    // afterbegin
    // beforeend
});



function closeModal(isOpen, src){
    if(isOpen){
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    } else {
        modal.classList.add('flex');
        modal.classList.remove('hidden');
        modal.children[0].children[1].children[0].src = src;
    }
}

function resetForm(){
    input.value = '';
}