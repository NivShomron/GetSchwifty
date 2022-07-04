class InputValidator {
    validate(input) {
        if (input == null) {
            return false;
        }
        return parseInt(input);
    }
}