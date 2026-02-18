let numbers = [
  [2, 4],
  [6, 8]
];
total = 0;

for(let i = 0;i<numbers.length; i++){
for(let j =0;j<numbers[i].length;j++){
if(numbers[i][j]>4){
  total += numbers[i][j]
}
}
}
console.log(total)

let users = [
  {
    name: "Anna",
    orders: [
      { price: 100 },
      { price: 200 }
    ]
  },
  {
    name: "John",
    orders: [
      { price: 50 },
      { price: 500 }
    ]
  }
];
total = 0
for(let i = 0;i<users.length;i++){
 
  for(let j = 0; j<users[i].orders.length;j++){
    total += users[i].orders[j].price
  }
}
console.log(total)
let students =[]
let studentstotal = 0;
let classrooms = [
  {
    className: "A",
    students: ["Anna", "John"]
  },
  {
    className: "B",
    students: ["Mike", "Sara"]
  }
];
for(let i = 0;i<classrooms.length;i++){
  for(let j = 0;j<classrooms[i].students.length;j++){
  students.push(classrooms[i].students[j])
  studentstotal = classrooms[i].students[j].length
  if(classrooms[i].students[j].includes('A')){
    console.log(classrooms[i].students[j])
  }
  }
}
console.log(studentstotal)
console.log(students)


let stores = [
  {
    name: "TechStore",
    products: [
      { name: "Laptop", price: 1000 },
      { name: "Mouse", price: 50 }
    ]
  },
  {
    name: "AccessoryShop",
    products: [
      { name: "Keyboard", price: 150 },
      { name: "USB", price: 20 }
    ]
  }
];
let gadgets = []
for(let i = 0; i<stores.length;i++){
  for(let j= 0; j<stores[i].products.length;j++){
    if(stores[i].products[j].price>100){
      gadgets.push(stores[i].products[j].name)
    }
  }
}
console.log(gadgets)

let companies = [
  {
    name: "TechCorp",
    employees: [
      { name: "Anna", salary: 5000 },
      { name: "John", salary: 3000 }
    ]
  },
  {
    name: "DesignInc",
    employees: [
      { name: "Mike", salary: 4000 },
      { name: "Sara", salary: 6000 }
    ]
  }
];
let totalPayroll = 0
let highestEarners = []
let companiesWithRichEmployees = []
for(let i =0;i<companies.length; i++){
  for(let j = 0;j<companies[i].employees.length; j++){
    totalPayroll += companies[i].employees[j].salary
    if(companies[i].employees[j].salary>4500){
      highestEarners.push(companies[i].employees[j].name)
    }
    if(companies[i].employees[j].salary>5500){
      companiesWithRichEmployees.push(companies[i].name)
    }
  }
}
console.log(totalPayroll)
console.log(highestEarners)
console.log(companiesWithRichEmployees)
let schools = [
  {
    name: "HighSchool",
    classes: [
      {
        name: "A",
        students: [
          { name: "Anna", grade: 90 },
          { name: "John", grade: 60 }
        ]
      },
      {
        name: "B",
        students: [
          { name: "Mike", grade: 75 }
        ]
      }
    ]
  },
  {
    name: "PrepSchool",
    classes: [
      {
        name: "C",
        students: [
          { name: "Sara", grade: 95 },
          { name: "Leo", grade: 50 }
        ]
      }
    ]
  }
];
let totalStudents =0
let highAchiever = []
let weakStudents = []
for(let i = 0; i<schools.length; i++){
  for(let j =0; j<schools[i].classes.length; j++){
    for(let k =0; k<schools[i].classes[j].students.length; k++){
    totalStudents ++
      if(schools[i].classes[j].students[k].grade>85){
        highAchiever.push(schools[i].classes[j].students[k].name)
      }
      if(schools[i].classes[j].students[k].grade<55){
          weakStudents.push(schools[i].name)
      }
    }
  }
}
console.log(totalStudents)
console.log(highAchiever)
console.log(weakStudents)