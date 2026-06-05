// Calculate Fibonacci Retracement levels
function getFibonacciLevels(high, low) {
    const diff = high - low;
    return {
        lvl236: high - diff * 0.236,
        lvl382: high - diff * 0.382,
        lvl500: high - diff * 0.500,
        lvl618: high - diff * 0.618
    };
}
module.exports = { getFibonacciLevels };