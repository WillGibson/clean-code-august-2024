const {MapNode} = require('./nodes');

describe("Can reach", () => {
    test("unconnected node cannot be reached", () => {
        const nodeA = new MapNode("A");
        const nodeG = new MapNode("G");

        expect(nodeA.canReach(nodeG)).toBe(false);
    });

    test("we cannot travel backwards", () => {
        const nodeA = new MapNode("A");
        const nodeB = new MapNode("B");
        nodeB.connectsTo(nodeA);

        expect(nodeA.canReach(nodeB)).toBe(false);
    });

    test("node can reach itself", () => {
        const nodeA = new MapNode("A");

        expect(nodeA.canReach(nodeA)).toBe(true);
    });

    test("node connections are one way", () => {
        const nodeB = new MapNode("B");
        const nodeA = new MapNode("A");
        nodeB.connectsTo(nodeA);

        expect(nodeB.canReach(nodeA)).toBe(true);
        expect(nodeA.canReach(nodeB)).toBe(false);
    });

    test("connected node with 2 degrees of separation can be reached", () => {
        const nodeB = new MapNode("B");
        const nodeC = new MapNode("C");
        const nodeD = new MapNode("D");
        nodeB.connectsTo(nodeC);
        nodeC.connectsTo(nodeD);

        expect(nodeB.canReach(nodeD)).toBe(true);
    });

    test("connected node with 4 degrees of separation can be reached", () => {
        const nodeB = new MapNode("B");
        const nodeC = new MapNode("C");
        const nodeD = new MapNode("D");
        const nodeE = new MapNode("E");
        const nodeF = new MapNode("F");
        nodeB.connectsTo(nodeC);
        nodeC.connectsTo(nodeD);
        nodeD.connectsTo(nodeE);
        nodeE.connectsTo(nodeF);

        expect(nodeB.canReach(nodeF)).toBe(true);
    });

    test("circles don't break it", () => {
        const nodeC = new MapNode("C");
        const nodeD = new MapNode("D");
        const nodeE = new MapNode("E");
        const nodeF = new MapNode("F");
        nodeC.connectsTo(nodeD);
        nodeD.connectsTo(nodeE);
        nodeE.connectsTo(nodeF);
        nodeF.connectsTo(nodeC);

        expect(nodeC.canReach(nodeF)).toBe(true);
        expect(nodeF.canReach(nodeC)).toBe(true);
        expect(nodeD.canReach(nodeC)).toBe(true);
    });

    test("we can navigate Ben's map", () => {
        const nodeA = new MapNode("A");
        const nodeB = new MapNode("B");
        const nodeC = new MapNode("C");
        const nodeD = new MapNode("D");
        const nodeE = new MapNode("E");
        const nodeF = new MapNode("F");
        const nodeG = new MapNode("G");
        const nodeH = new MapNode("H");
        nodeB.connectsTo(nodeA);
        nodeB.connectsTo(nodeC);
        nodeB.connectsTo(nodeF);
        nodeC.connectsTo(nodeD);
        nodeD.connectsTo(nodeE);
        nodeE.connectsTo(nodeF);
        nodeF.connectsTo(nodeC);
        nodeF.connectsTo(nodeH);

        expect(nodeC.canReach(nodeG)).toBe(false);

        expect(nodeC.canReach(nodeH)).toBe(true);
    });
});

describe("Number of hops", () => {
    test("cant reach throws an error", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");

        const t = () => {
            nodeA.countHopsTo(nodeB);
        };
        expect(t).toThrow(Error);
    });

    test("1 degree of separation is 1 hop", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeA.connectsTo(nodeB);

        expect(nodeA.countHopsTo(nodeB)).toEqual(1);
    });

    test("0 degrees of separation is 0 hops", () => {
        nodeA = new MapNode("A");
        nodeA.connectsTo(nodeA);

        expect(nodeA.countHopsTo(nodeA)).toEqual(0);
    });

    test("2 degrees of separation is 2 hops", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeC = new MapNode("C");
        nodeA.connectsTo(nodeB);
        nodeB.connectsTo(nodeC);

        expect(nodeA.countHopsTo(nodeC)).toEqual(2);
    });

    test("for multiple routes 2 degrees of separation is 2 hops", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeC = new MapNode("C");
        nodeD = new MapNode("D");
        nodeA.connectsTo(nodeB);
        nodeA.connectsTo(nodeC);
        nodeC.connectsTo(nodeD);

        expect(nodeA.countHopsTo(nodeD)).toEqual(2);
    });

    test("4 degrees of separation is 4 hops", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeC = new MapNode("C");
        nodeD = new MapNode("D");
        nodeE = new MapNode("E");
        nodeA.connectsTo(nodeB);
        nodeB.connectsTo(nodeC);
        nodeC.connectsTo(nodeD);
        nodeD.connectsTo(nodeE);

        expect(nodeA.countHopsTo(nodeE)).toEqual(4);
    });

    test("count hops works with loops", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeC = new MapNode("C");
        nodeF = new MapNode("F");
        nodeA.connectsTo(nodeB);
        nodeA.connectsTo(nodeF)
        nodeB.connectsTo(nodeC);
        nodeC.connectsTo(nodeA);

        expect(nodeA.countHopsTo(nodeF)).toEqual(1);
    });

    test("finds the shortest route", () => {
        nodeA = new MapNode("A");
        nodeB = new MapNode("B");
        nodeC = new MapNode("C");
        nodeD = new MapNode("D");

        // Because of the order they are connected, will attempt A->B->C first, but A->C is the shortest
        nodeA.connectsTo(nodeD);
        nodeA.connectsTo(nodeB);
        nodeB.connectsTo(nodeC);
        nodeA.connectsTo(nodeC);

        expect(nodeA.countHopsTo(nodeC)).toEqual(1);
    });

});