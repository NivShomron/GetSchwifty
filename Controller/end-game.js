class EndGame {
    end(buttons) {
        Array.prototype.forEach.call(buttons, button => { button.disabled = true; });
    }
}

export { EndGame };