let day = "Monday";
let daytype = ''
switch (day) {
  case "Monday":
    
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
   console.log('weekdays');
    break;
  case "Saturday":
  case "Sunday":
    console.log('weekends')
    break;
  default:
    console.log('Invalid Weekends')
    break;
}


let operator = "/";
let num1 = 10;
let num2 = 5;

switch(operator){
    case '+':
        console.log('Result is: '+(num1+num2));
        break;
       case '-':
        console.log('Result is: '+(num1-num2));
        break;
           case '*':
        console.log('Result is: '+(num1*num2));
        break;
           case '/':
        console.log('Result is: '+(num1/num2));
        break; 
        default: 
       console.log('Invalid Operators');
       break;

}

let light = "yellow";
switch(light){
    case 'red':
        console.log('Stop')
        break;
            case 'yellow':
        console.log('slow down')
        break;
            case 'green':
        console.log('go')
        break;
          default:
        console.log('Signal Error')
        break;
}

let age = 10;
let verification = (age>=18) ? 'Eligible to vote': 'Not eligible to vote'
console.log(verification)

function checkTemp(number){
return (number> 25)? 'Hot': (number>0)? 'Moderate': 'Freezing'
}

console.log(checkTemp(10))
let num = 1;
let check = (num %2===0)? 'even':'odd'

console.log(check)