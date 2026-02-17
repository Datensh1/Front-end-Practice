let numbers = [10, 45, 60, 30, 80, 70]
let largeNumber = numbers[1] 
let secondLargeNum = numbers[0] 

for(let i = 0; i<numbers.length; i++)
{ if (largeNumber< numbers[i]) {
  secondLargeNum = largeNumber
  largeNumber = numbers[i]
}else if(numbers[i]>secondLargeNum){
  secondLargeNum =numbers[i]
}}
console.log(secondLargeNum)

let word = "programming"
let counter = 0
for(let i = 0;i<word.length;i++){
if(word[i].includes('a')||word[i].includes('e')||word[i].includes('i')||word[i].includes('o')||word[i].includes('u')){

  
counter ++

}
}
console.log(counter)

let words = "banana"
let counters = 0;
for(let i = 0;i<words.length;i++){
  if(words[i] === 'a'){
    counters++
  }
}
console.log(counters)

for (let i = 1; i <= 5; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += "*";
  }

  console.log(line);
}


//functions
const price = function(price,discountPercent){
  return(price-discountPercent)
} 

console.log(price(100,20))

const largeNum = function(numa,numb){
  if (numa>numb){
    return numa
  }else if(numb>numa){
    return numb 
  }else{return 'equal'}
}

console.log(largeNum(20,20))

const converter = function(celsius){
  return (celsius*9/5)+32
}
console.log(converter(100))


const checker = function(password){
  if(password.length>=8){
    return 'Strong'
  }else{return 'Weak'}
}
console.log(checker('asasasasa'))

const sumArray = function(array){
  let total = 0;
  for(let i = 0; i<array.length;i++){
  total += array[i]
  } return total
}
console.log(sumArray([1,2,3]))



const max = function(maxArray){
  let marray = maxArray[0]

  for(let i = 0; i<maxArray.length;i++){
    if(maxArray[i]>marray){
      marray = maxArray[i]
    }
  } return marray
}
console.log(max([1,20,3,21,9,50]))







//arrays
let actions = []
actions.unshift("open file")
actions.unshift("edit text")
actions.unshift("save file")
actions.shift()
actions.unshift("close file")
console.log(actions)

let line = ["John", "Sarah"];
line.push("Mike");
line.shift()
line.push('Anna');
line.shift()
console.log(line)

let users = ["Anna", "John", "Mike"];
users.forEach(function(users){console.log("Hello "+ users)})

let prices = [100, 200, 300];
const discountedPrices = prices.map(function(price){
return price - (price * 0.20)

})
console.log(discountedPrices)

let ages = [12, 18, 25, 16, 30];
const legalAge = ages.filter(function(age){
  return age>= 18

}
)
console.log(legalAge)


let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 150 },
  { name: "USB", price: 20 }
];
const productprice = products.filter(function(product){
  return product.price>=100
})
.map(function(product){
  return product.name
})
console.log(productprice)

let students = [
  { name: "Anna", score: 85 },
  { name: "John", score: 45 },
  { name: "Mike", score: 92 },
  { name: "Sara", score: 60 }
];

const passed = students.filter(function(student){
return student.score>60
}).map(function(student){
  return student.name
})


console.log(passed)

let userss = [
  { name: "Anna", age: 22, active: true },
  { name: "John", age: 17, active: true },
  { name: "Mike", age: 25, active: false },
  { name: "Sara", age: 30, active: true }
];

const activeUsers = users.filter(function(user){
return user.active === true&& user.age> 18
})
.map(function(user){
  return user.name
})
console.log(activeUsers)
let orders = [
  { item: "Laptop", price: 1000 },
  { item: "Mouse", price: 50 },
  { item: "Keyboard", price: 150 }
];
let revenue = 0;
orders.forEach(function(order){
  revenue+=order.price
})
console.log(revenue)

let arr = [5, 7, 5, 9];




















































