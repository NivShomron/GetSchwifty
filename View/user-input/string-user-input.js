class StringUserInput {
    constructor(stringInputValidator) {
        this.stringInputValidator = stringInputValidator;
    }
    
    receive() {
        do {
            var input = prompt("What is your name?")
        } while (!this.stringInputValidator.validate(input));
        return input;
    }
}

export { StringUserInput };