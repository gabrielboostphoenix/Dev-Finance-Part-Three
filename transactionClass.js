// That's a constant called transaction (singular) that stores the object relative to the transaction
const Transaction = {
    // Attribute
    all: [],
    // Functionalities
    add(transactions) {
        // This functionality adds transactions in attribute all
        Transaction.all = transactions;
    },
    remove(index) {
        
    },
    income() {
        // This functionality adds up the entries
        // Creating a reset variable called income
        let income = 0;
        // Traversing the array of income amount values
        Transaction.all.forEach((transaction) => {
            // Checking if the amount values are negatives
            if (transaction.amount > 0) {
                // Adding all of the amount values of array in income variable
                income += transaction.amount;
            }
        })
        // Returning income value
        return income;
    },
    expenses() {
        // This functionality adds up the outputs
        // Creating a reset variable called expense
        let expense = 0;
        // Traversing the array of income amount values
        Transaction.all.forEach((transaction) => {
            // Checking if the amount values are negatives
            if (transaction.amount < 0) {
                // Adding all of the amount values of array in expense variable
                expense += transaction.amount;
            }
        })
        // Returning expense value
        return expense;
    },
    total() {
        // This functionality subtract income values with expense values
        // Creating constants of income and expense
        const income = Transaction.income();
        const expense = Transaction.expenses();
        // Doing arithmetic operation to return the total value
        const total = income + expense;
        // Returning total value
        return total;
    },
    removeTransactionsArray() {
        // This functionality removes the value of attribute all
        delete Transaction.all;
    }
}