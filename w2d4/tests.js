describe("filter", function () {
    it("returns the string after removing all the banned words",
        function () {
            assert.equal("This house is nice!", "This house is not nice!".filter('not'));
            assert.equal("This is a word!", "This is a bad word!".filter('bad'));
        });
});

describe("bubbleSort", function () {
    it("sorts an array of numbers using bubble sort",
        function () {
            assert.deepEqual([-2, 0, 1, 3, 4, 6], [6, 4, 0, 3, -2, 1].bubbleSort());
            assert.deepEqual([1, 2, 3, 4, 5, 6], [5, 3, 1, 2, 6, 4].bubbleSort());
        });
});

