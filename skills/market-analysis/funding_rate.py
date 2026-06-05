# Fetch and monitor Binance Funding rates
def evaluate_funding_risk(funding_rate):
    # High funding rates mean long positions pay short positions
    status = "OK"
    if funding_rate > 0.001: status = "WARNING_HIGH_LONG_COST"
    elif funding_rate < -0.001: status = "WARNING_HIGH_SHORT_COST"
    return {"funding_rate": funding_rate, "status": status}
