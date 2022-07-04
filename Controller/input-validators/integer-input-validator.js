class IntegerInputValidator {
    validate(input) {
        if (input == null) {
            return false;
        }
        return parseInt(input);
    }
}

export { IntegerInputValidator };