// Trailing Stop trigger condition check
function updateTrailingStop(currentPrice, highestPrice, trailPct, side) {
    const factor = trailPct / 100.0;
    if (side.toUpperCase() === 'LONG') {
        const stopPrice = highestPrice * (1 - factor);
        return { stopPrice, trigger: currentPrice <= stopPrice };
    } else {
        // For short, trailing stop tracks lowestPrice
        const stopPrice = highestPrice * (1 + factor);
        return { stopPrice, trigger: currentPrice >= stopPrice };
    }
}
module.exports = { updateTrailingStop };