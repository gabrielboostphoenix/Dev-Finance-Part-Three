// This is a constant called Form that stores an object
const Form = {
    // Attributes
    descriptionField: document.querySelector("input#description"),
    amountField: document.querySelector("input#amount"),
    dateField: document.querySelector("input#date"),
    // Functionalities
    // This functionality sends the form datas
    submit(event) {
        // Setting the default behavior of this event
        event.preventDefault();
        // Checking for errors using functions through try/catch
        try {
            // Checking for data fields aren't empty
            Form.validateFields();
            // Formatting the data fields to save it
            const transaction = Form.formatDataFields();
            // Saving the form field datas in LocalStorage
            Form.saveTransactionInLocalStorage(transaction);
            // Cleaning the form fields datas
            Form.clearDataFields();
        } catch (error) {
            // Showing messages relating to the erros
            window.alert(error.message);
        }
        // Closing the modal
        Modal.close();
        // Reloading the app
        App.reload();
    },
    validateFields() {
        // This functionality validates the data fields
        const {description, amount, date} = Form.getFormData()
        // Cleaning the whitespace characters at the ends
        if (description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Por favor, preencha todos os campos!")
        }
    },
    formatDataFields() {
        // This functionality formats the data fields
        let {description, amount, date} = Form.getFormData()
        // Formatting the amount value
        amount = Utils.formatAmount(amount)
        // Formatting the date value
        date = Utils.formatDate(date)
        // Formatting the description value
        description = Utils.formatDescription(description)
        // Returning an object with formatted values
        return {
            description,
            amount,
            date
        }
    },
    clearDataFields() {
        // This functionality cleans the form fields datas
        Form.descriptionField.value = ""
        Form.amountField.value = ""
        Form.dateField.value = ""
    },
    getFormData() {
        // This functionality captures the form fields datas
        return {
            description: Form.descriptionField.value,
            amount: Form.amountField.value,
            date: Form.dateField.value
        }
    },
    saveTransactionInLocalStorage(transaction) {
        // Checking for existing local storage
        if (localStorage.getItem('transactions') !== null) {
            console.log('transaction saved with successfully!');
            // Getting everything saved in local storage
            let transactionsArray = JSON.parse(localStorage.getItem('transactions'));
            // Spreading what was saved in a new array and adding the new transaction
            let newTransactionsArray = [...transactionsArray, transaction];
            // Converting and saving the transaction
            localStorage.setItem('transactions', JSON.stringify(newTransactionsArray));
        } else {
            return alert('Não foi possível salvar a transação, tente recarregar a página!');
        }
    }
}