// Calculate Take Profit targets
function calculateTakeProfit(entryPrice, rewardPct, side) {
    const factor = rewardPct / 100.0;
    if (side.toUpperCase() === 'LONG') return entryPrice * (1 + factor);
    return entryPrice * (1 - factor);
}
module.exports = { calculateTakeProfit };