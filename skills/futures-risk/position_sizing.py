# Kelly Criterion for position sizing optimization
def calculate_kelly_fraction(win_rate_pct, risk_reward_ratio):
    p = win_rate_pct / 100.0
    b = risk_reward_ratio
    q = 1.0 - p
    if b <= 0: return 0.0
    # Kelly Formula: f = (bp - q) / b
    f = (b * p - q) / b
    return max(0.0, f)
