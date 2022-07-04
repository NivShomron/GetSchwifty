class IntegerInputValidator {
    validate(input) {
        if (input == null || input <= 1) {
            return false;
        }
        return parseInt(input);
    }
}

export { IntegerInputValidator };