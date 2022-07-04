class IntegerUserInput {
    constructor(integerInputValidator) {
        this.integerInputValidator = integerInputValidator;
    }

    receive() {
        do {
            var input = prompt("How big do you want the board to be?", 3)
        } while (!this.integerInputValidator.validate(input));        
        return input;
    }
}

export { IntegerUserInput };