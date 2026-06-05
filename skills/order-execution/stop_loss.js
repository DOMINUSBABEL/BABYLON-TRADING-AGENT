// Calculate Stop Loss levels for futures positioning
function calculateStopLoss(entryPrice, riskPct, side) {
    const factor = riskPct / 100.0;
    if (side.toUpperCase() === 'LONG') return entryPrice * (1 - factor);
    return entryPrice * (1 + factor);
}
module.exports = { calculateStopLoss };