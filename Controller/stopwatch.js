class Stopwatch {
    constructor() {
        this.elapsedTime = 0;
    }

    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.elapsedTime += Date.now() - this.startTime
    }

    reset() {
        this.elapsedTime = 0
        this.startTime = Date.now()
    }
}

export { Stopwatch };