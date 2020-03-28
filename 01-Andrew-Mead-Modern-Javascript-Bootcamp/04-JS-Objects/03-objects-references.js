let myAccount = {
    name: 'Dhanushka Gayashan',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses += amount
    console.log(account)
}

addExpense(myAccount, 2.5)
console.log(myAccount)


let otherAccount = myAccount
otherAccount.income = 100
console.log(myAccount)