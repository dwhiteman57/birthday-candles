function birthdayCakeCandles(arr) {
    let candles = Math.max(...arr);
    return arr.filter(item => item === candles).length;
}

console.log(birthdayCakeCandles([4, 5, 1, 3, 5, 2, 5]) );