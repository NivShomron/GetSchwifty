class EndGame {
    constructor(stopwatch) {
        this.stopwatch = stopwatch;
    }

    end(buttons) {
        this.stopwatch.stop();

        Array.prototype.forEach.call(buttons, button => { button.disabled = true; });

        var h1Tag = document.createElement("H1");
        var h1Text = document.createTextNode("YOU WIN!");
        h1Tag.appendChild(h1Text);
        document.body.appendChild(h1Tag);
    }
}

export { EndGame };