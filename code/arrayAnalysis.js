function ArrayAnalysis(average, min, max, length) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
}

function sum(numberArray) {
    let total = 0;
    for (let i = 0; i < numberArray.length; i++) {
        total += numberArray[i];
    }
    return total;
}

function mean(numberArray) {
    let arraySum = sum(numberArray);
    return arraySum / (numberArray.length);
}

function min(numberArray) {
    let minValue = numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        if (minValue > numberArray[i]) {
            minValue = numberArray[i];
        }
    }
    return minValue;
}

function max(numberArray) {
    let maxValue = numberArray[0];
    for (let i = 0; i < numberArray.length; i++) {
        if (maxValue < numberArray[i]) {
            maxValue = numberArray[i];
        }
    }
    return maxValue;
}

function analyze(array) {
    let analyzedArray = new ArrayAnalysis;
    analyzedArray.average = mean(array);
    analyzedArray.min = min(array);
    analyzedArray.max = max(array);
    analyzedArray.length = array.length;
    
    return analyzedArray;
}
module.exports = analyze;