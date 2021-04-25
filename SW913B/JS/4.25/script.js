// Object and this keyword , Object function

// this => Window {object}

// let obj = {
//     ner: 'Narada',
//     hobby: 'kino uzeh',
//     nasTootsoh: function(birthYear){
//         this.nas = 2021 - birthYear;
//     }
// };

// function myFunction(){
//     console.log('my function')
// }

// myFunction();

// obj.nasTootsoh(1998);
// console.log(this);


function createUser(){
    let ner = prompt('Нэр оруул');
    let nas = prompt('Нас оруул');
    let email = prompt('Email оруул');
    let huis = prompt('Huis оруул');
    let utas = parseInt(prompt('dugaar оруул'));
    let regDugar = prompt('Registr оруул');

    let user = {
        ner: ner,
        nas: nas,
        email: email,
        huis: huis,
        number: utas,
        regNumber: regDugar,
    
        passGenerator: function(){
            this.password = '';
            let nameLetters = this.ner.toUpperCase()[0] + this.ner.toUpperCase()[1];
            let dugaar = this.number.toString();
            let fourDigits = dugaar[4]+dugaar[5]+dugaar[6]+dugaar[7];
            let rd = this.regNumber[0]+this.regNumber[1];
            
            this.password = nameLetters + fourDigits + rd;
        }
        
    }

    user.passGenerator();
    
    return user;
}

let hereglegch = createUser();

console.log(hereglegch)


function login(){
    let email = prompt('Email oruul');
    let nuutsUg = prompt('Password oruul');

    if(email === hereglegch.email && nuutsUg === hereglegch.password){
        alert(`Welcome ${hereglegch.ner}`);
    } else {
        console.log('Имэйл эсвэл нууц үг буруу байна.')
    }
}


// let x = 'bla';
// let tomUsguud = x.toUpperCase();
// let twoLetters = tomUsguud[0] + tomUsguud[1];


let obj = {
    ner: 'Bat',
    tootsoo: [124000, 48000, 268000],
    calculateTip: function(){

    }
}

// ner, tootsoo, tip = [15%, 20%, 10%], finalBill []