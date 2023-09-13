// let myage = 16;
// console.log(myage)

// let myAge = 16;
// let humanDogRatio = 7;

// let myDogAge = myage * humanDogRatio;
// console.log(myDogAge);

// let bonuspoints = 50;
// bonuspoints = bonuspoints + 50;
// console.log(bonuspoints)
// bonuspoints = bonuspoints - 75;
// console.log(bonuspoints);
// bonuspoints = bonuspoints + 45;
// console.log(bonuspoints);// logging function

// Understanding what is function and how to create function and how to use function
// function myfunctionofincrement(){
//     console.log(42)
// }
// myfunctionofincrement() 

// let lap1 =12;
// let lap2 = 45;
// let lap3 = 42;

// function loglaps(){ 

//     console.log(lap1 + lap2 + lap3);
// }
// loglaps()

// let lapscompleted = 0;

// function incrementfnct(){
//    lapscompleted = lapscompleted + 1;
// }    

// incrementfnct()
// incrementfnct()
// incrementfnct()

// console.log(lapscompleted)

// The passenger counter app for understanding JavaScript basic functions.
let count = 0
let countEl = document.getElementById("count")
let saveEL = document.getElementById("save-el")


// this function is for the increment button.
function incrementfnct(){
    count += 1;
    countEl.innerText = count;
    document.getElementById("count").innerHTML = count // This is called DOM function means the way to modfify the code in javascript by pushing html into Js.
}
// function for making save function for save button / QUIZ


function save(){
    let resultforSave = count + " - ";
    saveEL.textContent += " " + resultforSave
    count = 0; // Reset the count to 0
    countEl.innerText = count; // Update the displayed count to 0

}   
// learning string      

// let username = "John"
// let message = "You have three notifications"

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let Name = "Umer Alam"
// let greetings = "Hi, my name is "
// let myGreeting = greetings + "" + Name
// console.log(myGreeting)

// behaviour of strings when they are concatinated with numbers.

console.log(100 + "100")    
    

let welcomeEl = document.getElementById("greetings-el");
let userName = "Umer Alam";
let duasalam = "Welcome back ";
welcomeEl.innerText = duasalam + userName ;

welcomeEl.innerText += "👋"

