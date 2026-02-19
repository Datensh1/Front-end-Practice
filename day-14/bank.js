let bank ={
  owner: "Jo",
  balance:0,
  transactions: [],
  deposit(amount){
    this.balance += amount
    this.transactions.push('Deposited: ' + amount)
  },
  withdraw(amount){
    if(amount>this.balance){
      console.log('insufficient funds')
    }else{
        this.balance -= amount
    this.transactions.push('Withdraw: ' +amount)
    }
  },
  printStatement(){
    console.log("Owner: " +this.owner)
    console.log("Balance: " +this.balance)
    for(let i = 0; i<this.transactions.length; i++){
             console.log("Transactions: " +this.transactions[i])
    }

  }
}
bank.deposit(100)
bank.withdraw(30)
bank.withdraw(100)   // should fail
bank.deposit(20)
console.log(bank.transactions)
bank.printStatement()