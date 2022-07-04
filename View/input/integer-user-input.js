class IntegerUserInput {
    constructor(integerInputValidator, question, defaultAnswer) {
        this.integerInputValidator = integerInputValidator;
        this.question = question;
        this.defaultAnswer = defaultAnswer;
    }

    receive() {
        do {
            var input = prompt(this.question, this.defaultAnswer)
        } while (!this.integerInputValidator.validate(input));        
        return input;
    }
}

export { IntegerUserInput };