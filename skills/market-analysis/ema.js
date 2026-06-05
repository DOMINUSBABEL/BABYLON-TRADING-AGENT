// Exponential Moving Average calculation helper
function calculateEMA(data, period) {
    const k = 2 / (period + 1);
    let ema = [data[0]];
    for(let i=1; i<data.length; i++) {
        ema.push(data[i] * k + ema[i-1] * (1-k));
    }
    return ema;
}
module.exports = { calculateEMA };