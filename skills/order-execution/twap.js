// Time-Weighted Average Price (TWAP) execution order slicing algorithm
function sliceTWAPOrder(totalQuantity, totalTimeMinutes, intervalSeconds) {
    const intervalsCount = (totalTimeMinutes * 60) / intervalSeconds;
    if (intervalsCount <= 0) return [];
    const quantityPerSlice = totalQuantity / intervalsCount;
    return {
        slices: intervalsCount,
        sliceSize: Math.round(quantityPerSlice * 100000) / 100000,
        intervalMs: intervalSeconds * 1000
    };
}
module.exports = { sliceTWAPOrder };