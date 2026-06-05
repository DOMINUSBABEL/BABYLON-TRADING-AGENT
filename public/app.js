// Enhanced UI rendering with real-time order book depth
function updateOrderBookDepth(bids, asks) {
    const depthContainer = document.getElementById('depth-visualization');
    if (!depthContainer) return;
    
    let html = '<h4>Depth Imbalance</h4>';
    const totalBids = bids.reduce((acc, curr) => acc + curr[1], 0);
    const totalAsks = asks.reduce((acc, curr) => acc + curr[1], 0);
    const total = totalBids + totalAsks;
    
    if (total > 0) {
        const pctBids = (totalBids / total) * 100;
        html += `<div style="background:#10b981; width:${pctBids}%; height:8px; display:inline-block;"></div>`;
        html += `<div style="background:#ef4444; width:${100-pctBids}%; height:8px; display:inline-block;"></div>`;
    }
    depthContainer.innerHTML = html;
}
