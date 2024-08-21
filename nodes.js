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
        if (!this.canReach(destination)) {
            throw new Error();
        }
        return this.#countHopsToRecursive(destination, [], 0);
    }

    #countHopsToRecursive(destination, checkedNodes, hopCounts) {
        if (destination === this) {
            return hopCounts;
        }

        if (checkedNodes.includes(this)) {
            // return this.#countHopsToRecursive(node, checkedNodes, 0);
            return this.#FailedAttempt
        }

        checkedNodes.push(this);

        for (let connectedNode of this.#connectedTo) {
            let attempt = connectedNode.#countHopsToRecursive(destination, checkedNodes, hopCounts + 1);
            if (attempt !== this.#FailedAttempt) return attempt
        }

        // there are no connected neighbours
        return this.#FailedAttempt;
    }

    connectsTo(node) {
        this.#connectedTo.push(node)
    }
}

module.exports = {MapNode}