function sum(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function multiply(arr) {
    return arr.reduce((a, b) => a * b, 1);
}

const reversStr = (str) => str.split('').reverse().join('');

function findLongestWord(arr) {
    let longest = 0;
    arr.forEach(word => {
        if (word.length > longest) {
            longest = word.length;
        }
    });
    return longest;
}

function filterLongWords(arr, i) {
    let longWords = [];
    arr.forEach(word => {
        if (word.length > i) {
            longWords.push(word);
        }
    });
    return longWords;
}