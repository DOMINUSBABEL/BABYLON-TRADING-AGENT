// Futures liquidation price calculator for isolated margins
function calculateLiquidationPrice(entryPrice, leverage, side, maintenanceMarginPct = 0.004) {
    // Isolated margin liquidation formula
    if (side.toUpperCase() === 'LONG') {
        return entryPrice * (1 - (1 / leverage) + maintenanceMarginPct);
    } else {
        return entryPrice * (1 + (1 / leverage) - maintenanceMarginPct);
    }
}
module.exports = { calculateLiquidationPrice };