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

// Generating the HTML code for the objects and adding them in the index.html
transactionsArray.forEach((transaction) => {
    // Creating a constant called row that stores a html element tr
    const row = document.createElement("tr")
    // Formating the string containing transaction information and adding it to the html element tr
    row.innerHTML = `
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td><img src="assets/minus.svg" alt="Remover transação"></td>
    `
    // Adding the generated html code of the transactions in the index.html (Step 2)
    // Creating the variable of transactions data table
    let transactionDataTable = document.querySelector("#data-table tbody")
    // Adding the html code of transaction in the transaction data table
    transactionDataTable.appendChild(row)    
})