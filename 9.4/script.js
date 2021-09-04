

// const red = Math.floor(Math.random() * 256);
// const green = Math.floor(Math.random() * 256);
// const blue = Math.floor(Math.random() * 256);
// ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
// // ctx.fillRect(50, 50, 200, 100);
// // // x, y, width, height

// // ctx.fillRect(250, 150, 50, 200)

// // ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.beginPath()
// ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI, true);
// ctx.fill()
// ctx.stroke()

// ctx.beginPath()
// const red1 = Math.floor(Math.random() * 256);
// const green1 = Math.floor(Math.random() * 256);
// const blue1 = Math.floor(Math.random() * 256);
// ctx.fillStyle = `rgb(${red1}, ${green1}, ${blue1})`
// ctx.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI, false);
// ctx.fill()
// ctx.stroke()
// x, y, radius, 0, Math.PI * 2, boolean

// FPS - Frames Per Seconds
// 56hz => 1sec 56 refresh
// 144Hz => 1 sec => 144 refresh
// 244
// 300
// requestAnimationFrame
// setInterval
// let second = 0
// setInterval(() => {
//     console.log(second);
//     second++
// }, 1000/240)

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
 
canvas.width = 500;
canvas.height = 500;

let x = canvas.width/2;
let y = canvas.height/2;
let xspeed = 10;
let yspeed = 5;
const radius = 50

// const second = 0
function main(){
    requestAnimationFrame(main);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle()
    moveBall()
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
}

// document.addEventListener('keydown', e => {
//     if(e.keyCode === 39){
//         x += speed;
//     }
//     if(e.keyCode === 37){
//         x -= speed;
//     }
//     if(e.keyCode === 38){
//         y -= speed;
//     }

//     if(e.keyCode === 40){
//         y += speed;
//     }
// })

function moveBall(){
    if(x >= canvas.width - radius || x <= radius){
        xspeed = -xspeed;
    }

    if(y >= canvas.height - radius || y <= radius){
        yspeed = -yspeed;
    }

    x += xspeed
    y += yspeed
}

// velocity => zam/hugatsaa + direction

main()