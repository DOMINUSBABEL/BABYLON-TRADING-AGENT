// Moving Average Convergence Divergence (MACD) calculation
function calculateEMA(data, period) {
    const k = 2 / (period + 1);
    let ema = [data[0]];
    for (let i = 1; i < data.length; i++) {
        ema.push(data[i] * k + ema[i - 1] * (1 - k));
    }
    return ema;
}
function calculateMACD(closes, fast = 12, slow = 26, signal = 9) {
    if (closes.length < slow) return { macd: [], signal: [], histogram: [] };
    const emaFast = calculateEMA(closes, fast);
    const emaSlow = calculateEMA(closes, slow);
    
    let macdLine = [];
    for (let i = 0; i < closes.length; i++) {
        macdLine.push(emaFast[i] - emaSlow[i]);
    }
    
    const signalLine = calculateEMA(macdLine.slice(slow - 1), signal);
    let histogram = [];
    for (let i = 0; i < signalLine.length; i++) {
        histogram.push(macdLine[slow - 1 + i] - signalLine[i]);
    }
    return { macd: macdLine, signal: signalLine, histogram: histogram };
}
module.exports = { calculateMACD };