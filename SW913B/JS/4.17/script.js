/**   
 * 
 * 2021.04.17 
 * 
 */

// alert(), console.log();

// Variables - Хувьсагч;
// var text = "Хувьсагч шалгаж байна...";

// console.log(text);

// Data Types

// Number - Too, 0123456789;
// String - "Text"; '', "";
// Boolean - true, false; 0,1;
// null - Hooson;
// undefined - Todorhoigui;

// var sainuu = null;

// console.log(sainuu);

// var too = 123456;
// var text = "bla bla bla";
// var bolean = true;
// var nll = null;
// var undef = undefined;

// console.log(typeof(undef));

// a = 5, b = 6, c

// var a = 5;
// var b = 6;
// var c = a; // 5;
// a = b; // 6
// b = c; // 5

// a = 'text';

// console.log(a,b);

// console.log(a = 6, b = 5)


// constant 
// const nas = 21;

// console.log(nas);

// var , const

// Condition - Нөхцөл

// console.log(5 < 3);
// console.log(0.00001 > 0.0001);

// =, ==, ===
// = : huvisagch zarlah;
// ==, ===
// var x = "5";
// var y = "5";

// // strict => ===

// console.log(x === y);



// Operators - (+, -, *, /);

// Өндөр : 1.75
// Жин : 60кг

// var height = 1.75;
// var mass = 80;
// var BMI = mass / (height*height);

// console.log(BMI);

// var a = 5;
// var b = 10;


// c = b**a;


// console.log(c);

// Remainder operator %;

// console.log();


// A = 2pr
// r = 10; toirgiin, toirgiin urtiig olno, talbaig olno;


// a2+b2=c2;
// Tegsh ontsogtiin urt n 20m, urgun n 15m.. tegsh ontsogtiin diagonal olno...


/**
 * 
 * 2021.04.18
 * 
 */

// Contert number, for loop;

// var x = 56;
// var y = "56";

// console.log(x.toString() === y); // false

// Math Object;
// Integer - buhel toog;
// Float - Butarhai too;

// for(davtaltiin ehlel tseg; nuhtsul (davtaltiin tugsgul); uy shat){}

// for(var i = 10; i >= 0; i--){
//     console.log(i);
// }

// i = 0 uyd console.log(0)
// i = 1 uyd console.log(1)
// i = 2 uyd console.log(2)

// for(var i = 0; i < 100; i++){
//     console.log(i + ' сайн байна уу...');
// }

// '',  "",  " '' ",  '  ""  ', ``;

// var greet = 'Hello...';
// var intro = `I'm John.`;
// var nas = 21;


// console.log(`${greet} ${intro} I'm ${nas} years old...`);

// ES5 => Variable , var
// ES6 => let

// let myVar = 'Variables in ES6...';
// myVar = 456;

// console.log(myVar)


// {
//     let x = 56; // local
//     console.log(x);
// }

// let x = 67; // global
// x = 123
// {
//     let z = x;
//     console.log(z)
// }

// Data Structure - array, object

// Массив - хүснэгт - array;

// let arr = [123, 54, 'Text', true];

// console.log(arr.length);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// if statement

// if(5 < 6){ // true
//     console.log('Ok');
// }

// if(5 === "5"){ // false
//     console.log('YEAAAA....');
// }

// Өндөр : 1.75
// Жин : 60кг

// let height = 1.75;
// let weight = 78;
// let BMI = weight / (height**2);

// if(BMI >= 19 && BMI < 25){
//     console.log('Хэвийн жинтэй байна...');
// } else if(BMI >= 25 && BMI < 30){
//     console.log('Илүүдэл жинтэй...')
// } else if(BMI < 19) {
//     console.log('Тураалтай')
// }

// let nas = 16;

// if(nas >= 18){
//     console.log('Насанд хүрсэн...');
// } else {
//     console.log('Хүүхэд...')
// }

// let randomDataTypes = [56, 57, 123, 563, 256, 2456, 1, 23, 6, 12, 24];

// for(let i = 0; i < randomDataTypes.length; i++){
//     if(randomDataTypes[i]%2 === 0 && randomDataTypes[i]%3 === 0){
//         console.log(randomDataTypes[i]);
//     }
// }

// let rdt = [456, 23, 'str', 15, true, false, 'str2', 12, 'str3', 'str4'];

// for(let i = 0; i < rdt.length; i++){
//     if(typeof(rdt[i]) === 'string'){
//         console.log(rdt[i]);
//     }
// }


// [4, 78, 23, 6, 2, 5] , target = 9;