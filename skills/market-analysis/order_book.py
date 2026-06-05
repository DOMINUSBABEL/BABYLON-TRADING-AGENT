# Parse order book depth
def parse_orderbook_imbalance(bids, asks):
    sum_bids = sum(vol for p, vol in bids)
    sum_asks = sum(vol for p, vol in asks)
    total = sum_bids + sum_asks
    if total == 0: return 0.0
    return (sum_bids - sum_asks) / total
