const fibonacci = function(x) {
    if (x < 0) return 'OOPS';
    let first = 0;
    let second = 1;
    for (let i = 1; i <= x; i++) {
        if (x == 1) return second;
        if (i == 1) continue; // skip first loop
        let current = first + second;
        if (x == i) return current;
        first = second;
        second = current;
    }
};

// Do not edit below this line
module.exports = fibonacci;
