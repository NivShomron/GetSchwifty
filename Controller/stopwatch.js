class Stopwatch {
    constructor() {
        this.stopwatch = { elapsedTime: 0 }
    }

    start() {
        this.stopwatch.startTime = Date.now();
        this.stopwatch.intervalId = setInterval(() => {
            const elapsedTime = Date.now() - this.stopwatch.startTime + this.stopwatch.elapsedTime
            const milliseconds = parseInt((elapsedTime%1000)/10)
            const seconds = parseInt((elapsedTime/1000)%60)
            const minutes = parseInt((elapsedTime/(1000*60))%60)
            const hour = parseInt((elapsedTime/(1000*60*60))%24);
        }, 100);
    }

    stop() {
        this.stopwatch.elapsedTime += Date.now() - this.stopwatch.startTime
        clearInterval(this.stopwatch.intervalId)
    }

    reset() {
        this.stopwatch.elapsedTime = 0
        this.stopwatch.startTime = Date.now()
    }
}

export { Stopwatch };