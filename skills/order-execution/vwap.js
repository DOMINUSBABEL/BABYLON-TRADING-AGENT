// Volume-Weighted Average Price (VWAP) execution algorithm helper
function calculateVWAP(trades) {
    let sumPV = 0;
    let sumV = 0;
    trades.forEach(t => {
        sumPV += t.price * t.volume;
        sumV += t.volume;
    });
    return sumV === 0 ? 0 : sumPV / sumV;
}
module.exports = { calculateVWAP };