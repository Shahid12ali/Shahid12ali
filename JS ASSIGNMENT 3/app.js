//Q1 ANS
// var city_name = prompt("Enter the name of the city:");
// if (city_name.toLowerCase() === "karachi") {
//     document.write("Welcome to the city of lights!");
// } else {
//     document.write("Welcome to " + city_name);
// }


//Q2 ANS
// var gender = prompt("Please Enter Your Gender");
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am");
// }


//Q3 ANS
// var remainingFuel = prompt("Enter the remaining fuel in your car");
// var fuelAmount = parseFloat(remainingFuel);
//  if (fuelAmount < 0.25) {
//  alert("Please Refill The Fuel In Your Car");
//  } else {
//  alert("You have sufficient fuel in your car");
//  }


//Q4 ANS
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }

// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// }
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true");
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// }

// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// }

// if (true){ 
//     alert("True"); 
//    } if (false){ 
//    alert("False"); 
//    }

//    if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }


//Q5 ANS
// var secretNumber = 7;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Sorry, incorrect guess. The secret number was: " + secretNumber);
// }


//Q6 ANS
// var userNumber = parseInt(prompt("Enter a number:"));
// if (userNumber % 3 === 0) {
//     alert(userNumber + " is divisible by 3");
// } else {
//     alert(userNumber + " is not divisible by 3");
// }


//Q7 ANS
// var userNumber = parseInt(prompt("Enter a number:"));
// if (userNumber % 2 === 0) {
//     alert(userNumber + " is even number");
// } else {
//     alert(userNumber + " is odd number");
// }


//Q8 ANS
// var temperature = parseFloat(prompt("Enter The Temperature"));
// if (temperature > 40) {
//     alert("It Is Too Hot Outside");
// } else if (temperature > 30) {
//     alert("The Weather Today Is Normal");
// } else if (temperature > 20) {
//     alert("Today's Weather Is Cool");
// } else if (temperature > 10) {
//     alert("OMG! Today's Weather Is So Cool");
// } else {
//     alert("It's Very Cold Outside");
// }


//Q9 ANS
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// var result;
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
    
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         alert("Error: Division by zero.");
//     }
// } else if (operation === "%") {
    
//     if (num2 !== 0) {
//         result = num1 % num2;
//     } else {
//         alert("Error: Modulus by zero.");
//     }
// } else {
//     alert("Invalid operation. Please enter +, -, *, /, or %.");
// }
// if (result !== undefined) {
//     alert("Result: " + result);
// }

