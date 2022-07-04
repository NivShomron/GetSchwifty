class UserInput {
    constructor(inputValidator) {
        this.inputValidator = inputValidator;
    }

    receiveInput() {
        do {
            var input = prompt("How big do you want the board to be?", 3)
        } while (!this.inputValidator.validate(input));          
        return input;
    }
}

export { UserInput };