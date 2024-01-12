// This is a constant called Utils (Utility)
const Utils = {
    // This is a functionality that converts to monetary value
    currencyFormat(value) {
        // This process convert currency format locale
        value  = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            currencyDisplay: 'symbol'
        });
        // Returning the currency value
        return value;
    },
    // This is a functionality that converts the date value
    formatDate(value) {
        // Dividing the string by the hyphen
        const splittedDate = value.split("-")
        // Putting the date in correct order
        const standardDateFormatArray = splittedDate.reverse()
        // Returning the formatted date
        return `${standardDateFormatArray[0]}/${standardDateFormatArray[1]}/${standardDateFormatArray[2]}`
    },
    // This is a functionality that converts the description value
    formatDescription(value) {
        // Removing the whitespace characters at the ends
        const trimmedString = value.trim(" ")
        // Returning the formatted description
        return trimmedString
    }
}