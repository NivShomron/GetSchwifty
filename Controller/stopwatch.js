class Stopwatch {
    constructor() {
        this.elapsedTime = 0;
    }

    start() {
        this.startTime = Date.now();
        this.running = true;
    }

    stop() {
        this.elapsedTime += Date.now() - this.startTime;
        this.running = false;
    }

    reset() {
        this.elapsedTime = 0;
        this.startTime = Date.now();
    }
}

export { Stopwatch };