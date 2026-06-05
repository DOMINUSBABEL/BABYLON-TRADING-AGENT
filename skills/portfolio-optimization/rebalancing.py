# Portfolio allocation rebalancing helper
def calculate_rebalance_orders(current_allocs, target_allocs, total_value):
    orders = {}
    for asset, target in target_allocs.items():
        curr = current_allocs.get(asset, 0.0)
        diff = (target - curr) * total_value
        orders[asset] = diff
    return orders
