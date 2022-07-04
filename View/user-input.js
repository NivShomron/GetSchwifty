class UserInput {
    constructor(inputValidator) {
        this.inputValidator = inputValidator;
    }
    
    receiveName() {
        return prompt("What is your name?")
    }

    receiveBoardSize() {
        do {
            var input = prompt("How big do you want the board to be?", 3)
        } while (!this.inputValidator.validate(input));          
        return input;
    }
}

export { UserInput };