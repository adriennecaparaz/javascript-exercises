const repeatString = function(word, amount) {
    let repeatedString = "";
    if (amount < 0) return 'ERROR';
    for (i = 0; i < amount; i++) {
        repeatedString += word;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
