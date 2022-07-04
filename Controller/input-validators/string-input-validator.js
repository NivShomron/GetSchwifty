class StringInputValidator {
    validate(input) {
        if (input == null) {
            return false;
        }
        return true;
    }
}

export { StringInputValidator };