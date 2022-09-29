const palindromes = function (text) {
    let phrase = text.replace(/[^A-Za-z]/g, '');
    let palindrome = phrase.split('');
    return palindrome.reverse().join('').toLowerCase() === phrase.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
