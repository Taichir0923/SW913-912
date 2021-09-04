// Fetch API, Promise, Async JS
// Asynchronous JavaScript; Non-Blocking programming

// setTimeout 

// SUCCESS
// REJECT

// setTimeout((arg, num) => {
//     console.log(arg, num);
// }, 2000, "Say hello", 23);

// console.log("Loading...")

// setInterval
// let second = 0;
// setInterval(() => {
//     console.log(second);
//     second++;
// }, 1000)

// FETCH API - Application Programming Interface;
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const login = document.querySelector('#login')

// fetch('https://randomuser.me/api/?results=50')
// .then(response => response.json())
// .then(result => {
//     result.results.forEach(user => {
//         console.log(user.login, user.email);
//     })
//     // console.log(result.results[0)
//     login.addEventListener('click', () => {
//         const currentUser = result.results.find(user => user.email === email.value);
//         if(currentUser.login.password === password.value){
//             alert(`Hello ${currentUser.name.title}. ${currentUser.name.first} ${currentUser.name.last}`)
//         }
//     })

// });

// Jquery

fetch('./data/users.json')
.then(res => res.json())
.then(result => {
    console.log(result)
})
.catch(err => console.log(err));
// Async Await

async function getData(){
    const response = await fetch('https://randomuser.me/api/?results=50');
    
    const data = await response.json();

    console.log(data)
}