class StringUserInput {
    constructor(stringInputValidator, question) {
        this.stringInputValidator = stringInputValidator;
        this.question = question;
    }
    
    receive() {
        do {
            var input = prompt(this.question)
        } while (!this.stringInputValidator.validate(input));
        return input;
    }
}

export { StringUserInput };