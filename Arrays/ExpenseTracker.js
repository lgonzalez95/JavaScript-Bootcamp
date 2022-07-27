const account = {
    name: 'Luis González',
    expenses: [],
    incomes: [],
    addExpense: function(expenseName, amount) {
        this.expenses.push(
            {
                description: expenseName,
                amount: amount
            }
        )
    },
    addIncome: function(incomeName, amount) {
        this.incomes.push(
            {
                description: incomeName,
                amount: amount
            }
        )
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncomes = 0;
        
        this.expenses.forEach(function(expense) {
            totalExpenses += expense.amount;
        });
        this.incomes.forEach(function(income) {
            totalIncomes += income.amount;
        });
        return `${this.name} has a balance of $${totalIncomes - totalExpenses}. $${totalIncomes} in income. $${totalExpenses} in expenses.`;
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expense -> Luis González has $XXX in expenses.
// add income array to account
// add income method -> description, amount
// Tweak getAccountSummary
// getAccountSummary -> total up all expense -> Luis González has a balance of $XXX. $XXX in income. $XXX in expenses.

account.addIncome('Salary', 1500);
account.addExpense('Rent', 950);
account.addExpense('Coffee', 50);
console.log(account.getAccountSummary());