// Bollinger Bands calculation helper
function calculateBollingerBands(closes, period = 20, multiplier = 2) {
    if (closes.length < period) return null;
    let sum = 0;
    for(let i = closes.length - period; i < closes.length; i++) sum += closes[i];
    const sma = sum / period;
    
    let variance = 0;
    for(let i = closes.length - period; i < closes.length; i++) {
        variance += Math.pow(closes[i] - sma, 2);
    }
    const stdDev = Math.sqrt(variance / period);
    
    return {
        middle: sma,
        upper: sma + (multiplier * stdDev),
        lower: sma - (multiplier * stdDev)
    };
}
module.exports = { calculateBollingerBands };