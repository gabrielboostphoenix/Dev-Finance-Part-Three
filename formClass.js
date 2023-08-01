// This is a constant called Form that stores an object
const Form = {
    // Attributes
    descriptionField: document.querySelector("input#description"),
    amountField: document.querySelector("input#amount"),
    dateField: document.querySelector("input#date"),
    // Functionalities
    submit(event) {
        // This functionality sends the form datas
        event.preventDefault()
        // Checking for errors
        try {
            // Checking if data fields aren't empty
            Form.validateFields()
            // Formatting the data fields to save it
            const transaction = Form.formatDataFields()
            // Saving the form field datas
            Form.saveTransactionData(transaction)
            // Cleaning the form field datas
            Form.clearDataFields()
        } catch (error) {
            // Showing messages relating to the erros
            window.alert(error.message)
        }
        // Closing the modal
        Modal.close()
        // Reloading the app
        App.reload()
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
    saveTransactionData(transaction) {
        // This functionality saves all of the form field datas
        // Putting an object in the end of array like array item
        Transaction.add(transaction)
    },
    clearDataFields() {
        // This functionality cleans the form field datas
        Form.descriptionField.value = ""
        Form.amountField.value = ""
        Form.dateField.value = ""
    },
    getFormData() {
        // This functionality captures the form data
        return {
            description: Form.descriptionField.value,
            amount: Form.amountField.value,
            date: Form.dateField.value
        }
    }
}