class UserInput {
    constructor(inputValidator) {
        this.inputValidator = inputValidator;
    }

    receiveSize(inputValidator) {
        do {
            var size = prompt("How big do you want the board to be?", 3)
        } while (this.inputValidator.validate(size));          
        
        return size;
    }
}