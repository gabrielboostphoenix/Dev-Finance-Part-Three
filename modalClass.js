// That's a constant called modal
const Modal = {
    // Functionalities
    open() {
        // This functionality open the modal
        // It has the function of adding the active class to the modal
        document.querySelector("div.modal-overlay").classList.add("active");
    },
    close() {
        // This functionality close the modal
        // It has the function of removing the active class to the modal
        document.querySelector("div.modal-overlay").classList.remove("active");
    }
}
