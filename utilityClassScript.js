// This is a constant called Utils (Utility)
const Utils = {
    // This is a functionality that converts to monetary value
    currencyFormat(value) {
        // This constant contain currency value sign
        const signal = Number(value) < 0 ? "-" : ""
        // This regular expression (regex) process removes any unwanted characters
        value = String(value).replace(/\D/g, "")
        // This arithmetic operation returns the decimal places
        value = Number(value) / 100
        // This process convert currency format locale
        value  = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            currencyDisplay: 'symbol'
        })
        // Returning the currency value
        return signal + value
    }
}