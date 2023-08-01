// This is a constant called DOM (Document Object Model)
const DOM = {
    // Attribute
    transactionDataTable: document.querySelector("#data-table tbody"),
    // Methods
    // This functionality represents the complete html code for each transaction
    innerHTMLTransaction(transaction) {
        // Creating required constants relative to the structure's html code
        const transactionAmountColor = transaction.amount > 0 ? "income" : "expense"
        const amountCurrencyFormat = Utils.currencyFormat(transaction.amount)
        const structureHTMLCode = `
            <td class="description">${transaction.description}</td>
            <td class="${transactionAmountColor}">${amountCurrencyFormat}</td>
            <td class="date">${transaction.date}</td>
            <td onclick=""><img src="assets/minus.svg" alt="Remover transação"></td>
        `
        // Returning the constant
        return structureHTMLCode
    },
    // This functionality adds the transaction in the table
    addTransaction(transaction) {
        // Creating a constant called row that stores a html element tr
        const row = document.createElement("tr")
        // Adding the html formatted code structure in the constant row
        row.innerHTML = DOM.innerHTMLTransaction(transaction)
        // Inserting formatted constant called row in the transaction data table
        DOM.transactionDataTable.appendChild(row)
    },
    // This functionality updates balance values
    updateBalance() {
        // Creating constants
        const income = document.querySelector(".card.income p")
        const expense = document.querySelector(".card.expense p")
        const total = document.querySelector(".card.total p")
        // Adding the required values in the balance html fields
        income.innerHTML = Utils.currencyFormat(Transaction.income())
        expense.innerHTML = Utils.currencyFormat(Transaction.expenses())
        total.innerHTML = Utils.currencyFormat(Transaction.total())
    },
    // This functionality removes the transactions in the screen
    clearTransactions() {
        DOM.transactionDataTable.innerHTML = ""
    }
}