//Task: 1. Create an array that contains 5 of your favourite drinks. 
//Using one method, remove the items in position 1 and 2.
//Check out: https://www.w3schools.com/js/js_arrays.asp
//Check out: https://www.w3schools.com/js/js_array_methods.asp

let favouriteDrinks = ["Coffee", "Tea", "Orange Juice", "Water", "Coke"];
favouriteDrinks.splice(1,2);
console.log(favouriteDrinks);


//Task: 2. Use the Math library to create a random integer between 1 and 80
//Check out: https://www.w3schools.com/js/js_random.asp#gsc.tab=0&gsc.q=maths.ceal
//Check out: https://www.w3schools.com/jsref/jsref_ceil.asp

// There are 2 different methods to achieve the same (math.floor and math.ceil)
// Way 1:
Math.floor(Math.random() * 80) +1;
Math.ceil(Math.random() * 80);
// Way 2:
console.log(Math.ceil(Math.random() * 80))



// Task: 3. Create a dice roll program, generate a random number between 1 and 6 and 
// depending on the outcome, log in the terminal the number ‘rolled’ (eg “you rolled a 4”)
// Check out: https://www.w3schools.com/js/js_string_templates.asp
// Basically, the $ sign adds another bit of information to the bit prior to it.
// The back tick allows you to use the curly bracket and dollar sign system.
// The curly bracket is containing the code that is added via the $ system.

let diceRoll = Math.ceil(Math.random() * 6)
console.log(`You rolled a ${diceRoll}`)



// 4. Create a variable called password, have a checker in place to make sure the length of the
// password is 6 letters or more. If the password is less than 6 letters, log “password too short”.
// If the password is 6 or more, display the length followed by a thank you message.
// Check out: https://www.w3schools.com/jsref/jsref_length_string.asp

let password = "hello123"

if (password.length >= 6)
{

    console.log(`Your password is ${password.length} characters long. Thank you.`)
   // block of code to be executed if condition1 is True
}
else {
    console.log("Your password is tooshort.")
}




// Task 5. Have two variables called ‘bool1’ and ‘bool2’ and assign them both Boolean values (true or
// false). Log to the console true, if exactly one of the values are true. Otherwise log false.

// look up: if else statements: https://www.w3schools.com/js/js_if_else.asp
// look up Comparison and Logical Operators : https://www.w3schools.com/js/js_comparisons.asp

let bool1 = false
let bool2 = true

if (bool1 !== bool2){
    console.log("True")
}
else { console.log("False")
}


// if (bool1 !== bool2){
//     console.log("They're different")
// }
// else { console.log("They're the same")
// }




// Task 6. Create a variable called num. If the number is divisible by 3 log “fizz” to the console, if it’s
// divisible by 5 log “buzz” to the console. If its divisible by both 3 and 5 log “fizz buzz” to the
// console. Otherwise log num to the console.

// Look up: https://www.w3schools.com/js/js_arithmetic.asp
// Look up FizzBuzz challenge on Youtube: https://www.youtube.com/watch?v=Uy9DefvzYi4

let num = 10

if (num % 5 == 0 && num % 3 == 0) {
    console.log("FizzBuzz")
}
else if (num % 5 == 0) {
    console.log("Buzz")
}
else if (num % 3 == 0) {
    console.log("Fizz")
}
else {
    console.log(`${num}`)
}




// Task 7. Create 2 variables, assign a number to one (between 1 – 10) and generate a random number
// to the other variable (between 1 – 10). Create a loop that checks if the number assigned and
// the generated number are the same, if they are not log to the console “not the same”
// followed by the randomly generate number, then generate another random number to try
// again. When they match, log to the console how many loop cycles it went through to match
// the two numbers.

// Look up: While Loop : https://www.w3schools.com/js/js_loop_while.asp


let assignedNumber = 4;
let randomNumber = Math.ceil(Math.random() * 10)
let counter = 0
console.log(`The number we are looking to match is ${assignedNumber}`)
matched = false

while (matched == false){
    counter++
    if (assignedNumber === randomNumber){
        console.log(`You got a match. The random number was ${randomNumber}. It took ${counter} cycles.`)
        matched = true
    }
    else {
        console.log(`Not the same. Random number was ${randomNumber} `)
        randomNumber = Math.ceil(Math.random() * 10)
    }
}

