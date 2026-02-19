let car = {
  brand: "Toyota",
  color: "Red",
  year: 2021
}
let y = 'year'
let student = {
   name: "Saiki",
  grade:  90,
  isPassed: true
}

student.grade = 85
student.section = "A"
delete student.isPassed
console.log(car.brand)
console.log(car["year"])
console.log(student.grade)
console.log(student.section)



console.log("level 2")
let product = {
  name: "Laptop",
  price: 50000,
  stock: 10
}
let key = "price"
key = "stock"
console.log(product[key])
let user = {
  username: "Jo",
  email: "jo@email.com",
  role: "admin"
}

console.log(user.role)
console.log(user["role"])


let bankAccount = {
  owner:"Jiheon",
  balance:0,
 deposit(deposit){

  this.balance += deposit  
  },
withdraw(withdraw){
  if(this.balance<withdraw)
  {console.log('insufficient funds')
    
  }
  else{  this.balance -= withdraw  }

  }
  
}

bankAccount.deposit(100)
bankAccount.withdraw(100)
console.log(bankAccount.balance)

let person = {
  name: "Ana",
  age: 25,
  country: "USA"
}

for(const user in person){
    console.log(`${user} is ${person[user]}`);
}  

let cart = {
  item: "Shoes",
  price: 3000,
  quantity: 2,
  
  total(){
  price = this.price;
  quantity = this.quantity;
   console.log( price*quantity)
  }
}
cart.total()

let voter = {
  name: "Jo",
  age: 18,
  canVote(){
    name = this.name;
    age = this.age;
    if(age>=18){
      console.log('Eligible')
    }else(console.log('Not Eligible'))
  }
}

voter.canVote()
let profile = {
  username: "jo123",
  email: "jo@email.com",
  password: "1234"
}
let field = 'email'
let changeEmail = profile["email"] = "Joyul3294@gmail.com"
console.log(profile.email)
field = 'username'
let changeUn = profile.username = "Saiki143"
console.log(profile.username)




let inventory = {
  product: "Phone",
  stock: 5,
  addStock(amount){
    
this.stock += amount
  },
  
  sell(amount){
    stock = this.stock
    if(amount>stock){
      console.log('denied')
    }else{
      stock -= amount
      console.log(stock)
    }
  }
}

inventory.addStock(100)
console.log(inventory.stock)
inventory.sell(100)

let users = {
  name: "Ana",
  address: {
    city: "New York",
    zip: 10001
  }
}

console.log(users.address.city)
users.address.city = "Los Angeles"
console.log(users.address.city)
console.log(users["address"]["zip"])




function Car(brand, year) {
  this.brand = brand
  this.year = year

}
  Car.prototype.getInfo = function(){
    console.log(this.brand + " - "+this.year)
  }
let sportscar = new Car("ferrari",+ 2024)
let car1 = new Car("Toyota", 2020)
let car2 = new Car("Honda", 2022)

sportscar.getInfo()
car1.getInfo()
car2.getInfo()

