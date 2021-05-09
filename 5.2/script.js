// querySelector('.box .title') => [div, .class, #id]
// const boxes = document.getElementsByClassName('box'); // for
// const title = document.getElementById('title');

// getElementsByClassName('')
// getElementById('')
// getElementsByTagName('')

const boxes = document.querySelectorAll('.box'); // Arrays - for, forEach
// const boxes = document.querySelector('.box'); // Arrays - for, forEach

// box.style.backgroundColor = 'black'

for(let i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        removeActiveClass();
        boxes[i].classList.add('active');
    }
}

function removeActiveClass(){
    for(let j = 0; j < boxes.length; j++){
        boxes[j].classList.remove('active');
    }
}

// className

// call stack - Өөр функц дотор функц дуудах

// callback - argument хэлбэрээр функц дуудах - Энэ миний утасны дугаар, хэрэгтэй үедээ залга
// function onTootsoh(){
//     return 1995;
// }

// function nasTootsoh(year){ // 1996
//     return 2021 - year;
// }
// Modal Box

// parentNode
// children - child