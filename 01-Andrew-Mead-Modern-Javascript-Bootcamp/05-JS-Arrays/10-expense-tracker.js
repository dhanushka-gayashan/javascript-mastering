const account = {
    name: 'Dhanushka Gayashan',
    expenses: [],
    income: [],
    addIncome: function (description, amount) {
        const income = {
            description: description,
            amount: amount
        }
        this.income.push(income)
    },
    addExpense: function (description, amount) {
        const expence = {
            description: description,
            amount: amount
        }
        this.expenses.push(expence)
    },
    getAccountSummary: function () {
        let totalIncome = 0
        let totalExpense = 0
        let accountBalance = 0

        this.income.forEach(function (income, index) {
            totalIncome += income.amount
        })
        
        this.expenses.forEach(function (expence, index) {
            totalExpense += expence.amount
        })

        accountBalance = totalIncome - totalExpense
        
        return `${account.name} has a balance of $${accountBalance}. $${totalIncome} in incomes. $${totalExpense} in expenses.`
    }
}

account.addIncome('Salary', 500)

account.addExpense('Coffee', 10)
account.addExpense('Rent', 190)
account.addExpense('Lunch', 20)

const summary = account.getAccountSummary() 
console.log(summary)