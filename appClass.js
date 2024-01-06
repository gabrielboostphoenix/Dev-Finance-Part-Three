// This is a constant called App (Application) that stores an object
const App = {
    // Functionalities
    // This functionality initializes the reading of the transactions array
    init() {
        // This conditional statement checks for an existing 'transactions' key in local storage
        if (localStorage.getItem('transactions') !== null) {
            // Getting everything saved and converted in local storage
            let transactionsArray = JSON.parse(localStorage.getItem('transactions'));
            // Checking for existing transactions in the list
            if (Array.isArray(transactionsArray) && transactionsArray.length > 0) {
                // Removing the existing transactions in attribute all from Transaction object
                Transaction.removeTransactionsArray();
                // Adding what was saved in local storage to attribute all
                Transaction.add(transactionsArray);
                // Rendering all of the transactions in the screen
                Transaction.all.forEach((item, position) => {
                    DOM.addTransaction(item, position);
                });
                // Updating the balance results in the screen
                DOM.updateBalance();
            } else {
                // Cleaning all of the balance results
                DOM.clearBalances();
                // Cleaning all of the transactions in the screen
                DOM.clearTransactions();
            }
        } else {
            // Setting the converted transactions array and storing it in a variable
            let transactionsArray = JSON.stringify(Transaction.all);
            // Defining it in local storage
            localStorage.setItem('transactions', transactionsArray);
        }
    },
    // This functionality clears the html screen and reloads the initalization
    reload() {
        DOM.clearTransactions();
        App.init();
    }
}