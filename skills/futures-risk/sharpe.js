// Sharpe and Sortino investment performance ratios calculators
function calculateSharpeRatio(returns, riskFreeRate = 0.02) {
    const n = returns.length;
    if (n < 2) return 0.0;
    const avgReturn = returns.reduce((a, b) => a + b) / n;
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / (n - 1);
    const stdDev = Math.sqrt(variance);
    if (stdDev === 0) return 0.0;
    return (avgReturn - riskFreeRate) / stdDev;
}
module.exports = { calculateSharpeRatio };