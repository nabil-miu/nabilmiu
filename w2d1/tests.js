/* sums respectively all the numbers in an array of numbers */
describe("sum", function () {
    it("sums respectively all the numbers in an array of numbers",
        function () {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
});

/* multiply respectively all the numbers in an array of numbers */
describe("multiply", function () {
    it("multiply respectively all the numbers in an array of numbers",
        function () {
            assert.equal(24, multiply([1, 2, 3, 4]));
        });
});

/* reverses a string */
describe("reversStr", function () {
    it("reverses a string",
        function () {
            assert.equal("olleh", reversStr("hello"));
        });
});

/* returns the length of the longest word in an array of words */
describe("findLongestWord", function () {
    it("returns the length of the longest word in an array of words",
        function () {
            assert.equal(7, findLongestWord(["hello", "world", "longest"]));
        });
});

/* returns the array of words that are longer than i */
describe("filterLongWords", function () {
    it("returns the array of words that are longer than i",
        function () {
            assert.deepEqual(["longest"],
                filterLongWords(["hello", "world", "longest"], 5));
        });
});