class MapNode {
    #connectedTo = [];
    #name;
    #FailedAttempt = -1

    constructor(name) {
        this.#name = name;
    }

    canReach(destination) {
        return this.#countHopsToRecursive(destination, [], 0) !== this.#FailedAttempt;
    }

    countHopsTo(destination) {
        const hops = this.#countHopsToRecursive(destination, [], 0);
        if (hops !== this.#FailedAttempt) {
            return hops;
        } else {
            throw new Error();
        }
    }

    #countHopsToRecursive(destination, checkedNodes, hopCount) {
        if (destination === this) {
            return hopCount;
        }

        if (checkedNodes.includes(this)) {
            return this.#FailedAttempt
        }

        checkedNodes.push(this);

        let attemptResults = []
        for (let connectedNode of this.#connectedTo) {
            let attempt = connectedNode.#countHopsToRecursive(destination, checkedNodes, hopCount + 1);
            if (attempt !== this.#FailedAttempt) {
                attemptResults.push(attempt)
            }
        }

        if (attemptResults.length > 0) {
            return Math.min(...attemptResults);
        }

        // there are no connected neighbours
        return this.#FailedAttempt;
    }

    connectsTo(node) {
        this.#connectedTo.push(node)
    }
}

module.exports = {MapNode}