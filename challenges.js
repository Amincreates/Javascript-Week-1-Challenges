//Task: Create an array that contains 5 of your favourite drinks. 
//Using one method, remove the items in position 1 and 2.
//Check out: https://www.w3schools.com/js/js_arrays.asp
//Check out: https://www.w3schools.com/js/js_array_methods.asp
let favouriteDrinks = ["Coffee", "Tea", "Orange Juice", "Water", "Coke"
];
favouriteDrinks.splice(0,2);
console.log(favouriteDrinks)



//Task: Use the Math library to create a random integer between 1 and 80
//Check out: https://www.w3schools.com/js/js_random.asp#gsc.tab=0&gsc.q=maths.ceal
//Check out: https://www.w3schools.com/jsref/jsref_ceil.asp

// These are 2 different methods to achieve the same (math.floor and math.ceil)
Math.floor(Math.random() * 80) +1;
Math.ceil(Math.random() * 80);

console.log(Math.floor(Math.random() * 80) +1)
console.log(Math.ceil(Math.random() * 80))



// Create a dice roll program, generate a random number between 1 and 6 and 
// depending on the outcome, log in the terminal the number ‘rolled’ (eg “you rolled a 4”)
// Check out: https://www.w3schools.com/js/js_string_templates.asp
// Basically, the $ sign adds another bit of information to the bit prior to it.
// The back tick allows you to use the curly bracket and dollar sign system.
// The curly bracket is containing the code that is added via the $ system.
Math.floor(Math.random() * 6) +1;
console.log(`You rolled a ${Math.floor(Math.random() * 6) +1}`)



// Create a variable called password, have a checker in place to make sure the length of the
// password is 6 letters or more. If the password is less than 6 letters, log “password too short”.
// If the password is 6 or more, display the length followed by a thank you message.
// Check out: https://www.w3schools.com/jsref/jsref_length_string.asp
// Check out:
let password = "hello123"
console.log(password.length)
if (password < 6)
{
    // block of code to be executed if condition1 is True
}
else if



// Have two variables called ‘bool1’ and ‘bool2’ and assign them both Boolean values (true or
// false). Log to the console true, if exactly one of the values are true. Otherwise log false




// Create a variable called num. If the number is divisible by 3 log “fizz” to the console, if it’s
// divisible by 5 log “buzz” to the console. If its divisible by both 3 and 5 log “fizz buzz” to the
// console. Otherwise log num to the console.



// Create 2 variables, assign a number to one (between 1 – 10) and generate a random number
// to the other variable (between 1 – 10). Create a loop that checks if the number assigned and
// the generated number are the same, if they are not log to the console “not the same”
// followed by the randomly generate number, then generate another random number to try
// again. When they match, log to the console how many loop cycles it went through to match
// the two numbers.