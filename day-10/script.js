const companyName ="Tech Innovations Inc.";
var employeeCount = 50;
const MAX_EMPLOYEES = 100;;
var employeeCount = 75; 

console.log("Company Name:", companyName);
console.log("Employee Count:", employeeCount);
console.log("Max Employees:", MAX_EMPLOYEES);   
// This will work, but it's not recommended to use var for variables that can change.
// Snippet A
let city = "New York";
if (true) {
    let city = "London";
    console.log("Inside block A:", city);
}
console.log("Outside block A:", city);

// Snippet B
let country = "USA";
if (true) {
    let country = "Canada";
    console.log("Inside block B:", country);
}
console.log("Outside block B:", country);

// Snippet C
const temperature = 20;
function weatherReport() {
    const temperature = 25; // Is this a re-declaration or a new variable?
    console.log("Function temperature C:", temperature);
}
weatherReport();
console.log("Global temperature C:", temperature);



let binaryNumber = 0b1100101;
console.log("Binary Number:", binaryNumber);


let text = "Javascript is fun!";
console.log(text.length);
console.log(text.substring(11, 18));
console.log(text.toUpperCase());

let num1 = 0;
let word =  "Hello";
let word_2 = null;
let num2 =100;
let  error  =undefined;
let  nan = NaN;
console.log(Boolean(num1)); // false
console.log(Boolean(num2)); // true
console.log(Boolean(word));
console.log(Boolean(word_2));
console.log(Boolean(error));
console.log(Boolean(nan));


let age =25;
let name = "Alice";
if(age > 18 && name === "Alice") {
   console.log(Boolean(false) + 'age is greater than 18 and name is Alice');
} else {
    console.log(Boolean(true));
}

console.log('-----------------------------');
let given_num = 11;
if(given_num % 2 !== 0) {
    console.log("The number is odd");
}else{
console.log("The number is even");
}
console.log('------Area of a circle------');
let radius = 50;
const area =  Math.PI* radius**2;
console.log(Number(area.toFixed(2)));
console.log(area.toFixed());
console.log('------celsius to farenheight------');
let celsius = "30C";
const Fahrenheit = (parseFloat(celsius) * 9/5) + 32;
console.log(Fahrenheit + "F");

console.log('------compare ages------');
let person1Age = 30;
let person2Age = 30;
if(person1Age> person2Age){console.log("Person 1 is older than or the same age as Person 2");}
else if (person1Age < person2Age) {console.log("Person 1 is younger than Person 2");}
else {console.log("Person 1 and Person 2 are the same age");}

let shoppingList = ["Milk", "Eggs", "Bread", "Cheese"];
let shoppingListString = "";
for(let i = 0; i < shoppingList.length; i++) {
    shoppingListString = shoppingListString + shoppingList[i] 
    if(i < shoppingList.length + 1) {
    shoppingListString = shoppingListString + " \n";
}
}

console.log(shoppingListString);
console.log(0 && "hello");


console.log('------Control Flow------');
let score = 0;
if(score >=1){
    console.log("this number is postiive");
}else if(score <-1){
console.log("this number is negative");
}else{console.log('this number is zero')}

let ticketage = 55
if(ticketage<12){console.log('Your ticketis 5$')


}else if(ticketage>12 && ticketage<65){console.log('your ticket is 12$')}
else{console.log('Your ticketis 7$')}


 