const removeFromArray = function(oldArray, ...toRemove) {
    const newArray = oldArray;

    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            if (toRemove[i] === newArray[j]) {
                newArray.splice(j, 1);
                break;
            }
        }
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
