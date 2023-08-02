// This is a constant called App (Application) that stores an object
const App = {
    // Functionalities
    // This functionality initializes the read of the transaction array
    init() {
        Transaction.all.forEach((arrayTransactionItem, index) => {
            DOM.addTransaction(arrayTransactionItem, index)
        })
        DOM.updateBalance()
    },
    // This functionality clears the html screen and reloads the initalization
    reload() {
        DOM.clearTransactions()
        App.init()
    }
}