//Logical Operators
//Eligibility for a Loan: Write a JavaScript program that checks if a person is eligible for a loan. The person must be employed and have a credit score of 700 or higher. Use logical operators to combine these conditions.
let personCredit = 1000;

let credit = 700;
if (personCredit < credit || personCredit <= 0) {
  console.log("You are not eligble yet!");
} else if (personCredit > credit || personCredit > 700) {
  console.log("You are eligible for a loan");
}

let customerBuys = 120;
let discountOne = 10;
let discountTwo = 5;
let member = true;

if (customerBuys < 100 && member) {
  let discountTo = (discountTwo / 100) * customerBuys;
  let discountTotal = customerBuys - discountTo;
  console.log(discountTotal);
} else if (customerBuys > 100 && member) {
  let discountOn = (discountOne / 100) * customerBuys;
  let discountTotal2 = customerBuys - discountOn;
  console.log(discountTotal2);
}

let username = "admin";
let password = "Admin123";
let isBlocked = true;
if (isBlocked) {
  console.log("Account is blocked");
} else if (username !== "admin") {
  console.log("Username not found");
} else if (username === "admin" && password !== "Admin123") {
  console.log("Incorrect password");
} else {
  console.log("Login successful");
}

let balance = 500;
let withdrawAmount = 200;
let isCardValid = true;
let pinCorrect = true;

if (!isCardValid) {
  console.log("Card Declined");
} else if (!pinCorrect) {
  console.log("Incorrect PIN");
} else if (withdrawAmount > balance) {
  console.log("Insufficient Funds");
} else if (withdrawAmount <= 0) {
  console.log("Invalid Amount");
} else {
  let bal = balance - withdrawAmount;
  console.log("Withdrawal successful. Remaining balance:  " + bal);
}

let month = "September";
if (month === "December" || month === "January" || month === "Febraury") {
  console.log("This season is winter");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("This season is spring");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("This season is summer");
} else if (
  month === "September" ||
  month === "October" ||
  month === "November"
) {
  console.log("This season is fall");
} else {
  console.log("no month found");
}
