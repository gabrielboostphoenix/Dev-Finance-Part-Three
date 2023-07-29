// That's a constant called transaction (singular) that stores the object relative to the transaction
const transaction = {
    // Methods or Functionalities
    income() {
        // This functionality adds up the entries

    },
    expenses() {
        // This functionality adds up the outputs

    },
    total() {
        // This functionality subtract input values from output values

    }
}

// This is a constant called transactions (plural) that stores an array containing the objects
const transactionsArray = [
    {
        id: 0,
        description: 'Luz',
        amount: -50000,
        date: '09/07/2023'
    },
    {
        id: 1,
        description: 'Criação de Website',
        amount: 500000,
        date: '10/07/2023'
    },
    {
        id: 2,
        description: 'Aluguel',
        amount: -150000,
        date: '03/07/2023'
    }
]

// This is a constant called DOM (Document Object Model)
const DOM = {
    // This functionality adds the transaction in the table
    addTransaction(transactionTableID, transaction) {
        // Creating a constant called row that stores a html element tr
        const row = document.createElement("tr")
        // Adding the html formatted code structure in the constant row
        row.innerHTML = DOM.innerHTMLTransaction(transaction)
        // Inserting formatted constant called row in the transaction data table
        transactionTableID.appendChild(row)
    },
    // This functionality represents the full HTML code
    innerHTMLTransaction(transactionObject) {
        // Creating a constant containing the structure's html code
        const structureHTMLCode = `
            <td class="description">${transactionObject.description}</td>
            <td class="expense">${transactionObject.amount}</td>
            <td class="date">${transactionObject.date}</td>
            <td><img src="assets/minus.svg" alt="Remover transação"></td>
        `
        // Returning the constant
        return structureHTMLCode
    }
}

// Using ".forEach()"" method to traverse the transactions Array
// Creating an arrow function to realize the required operations to insert in the table
transactionsArray.forEach((arrayItem) => {
    const transactionDataTable = document.querySelector("#data-table tbody")
    DOM.addTransaction(transactionDataTable, arrayItem)
})