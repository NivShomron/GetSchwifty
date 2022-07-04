import { Score } from "./score.js"

class ScoreCreator {
    create(name, gameTime, boardSize, startTime) {
        return new Score(name, gameTime, boardSize, startTime);
    }
}

export { ScoreCreator };