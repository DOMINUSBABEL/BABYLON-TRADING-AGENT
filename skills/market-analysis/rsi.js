// Relative Strength Index (RSI) SOTA indicator calculation
function calculateRSI(closes, period = 14) {
    if (closes.length <= period) return 50.0;
    let gains = 0;
    let losses = 0;
    
    for (let i = 1; i <= period; i++) {
        let diff = closes[i] - closes[i - 1];
        if (diff > 0) gains += diff;
        else losses -= diff;
    }
    
    let avgGain = gains / period;
    let avgLoss = losses / period;
    
    for (let i = period + 1; i < closes.length; i++) {
        let diff = closes[i] - closes[i - 1];
        avgGain = (avgGain * (period - 1) + (diff > 0 ? diff : 0)) / period;
        avgLoss = (avgLoss * (period - 1) + (diff < 0 ? -diff : 0)) / period;
    }
    
    if (avgLoss === 0) return 100;
    let rs = avgGain / avgLoss;
    return 100 - (100 / (1 + rs));
}
module.exports = { calculateRSI };