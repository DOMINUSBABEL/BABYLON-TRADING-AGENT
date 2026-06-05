// UI rendering and interactive logic for Trading Agent
document.addEventListener('DOMContentLoaded', () => {
    // Menu navigation
    const menuItems = document.querySelectorAll('.menu-item');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(mi => mi.classList.remove('active'));
            tabPanes.forEach(tp => tp.classList.remove('active'));
            
            item.classList.add('active');
            const targetTab = item.getAttribute('data-tab');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Fetch and render open positions
    fetch('/api/positions')
        .then(res => res.json())
        .then(positions => {
            const body = document.getElementById('positions-body');
            body.innerHTML = '';
            
            positions.forEach(pos => {
                const tr = document.createElement('tr');
                const pnlClass = pos.pnl >= 0 ? 'success-text' : 'error-text';
                tr.innerHTML = `
                    <td><strong>${pos.symbol}</strong></td>
                    <td class="${pos.side === 'LONG' ? 'success-text' : 'error-text'}">${pos.side}</td>
                    <td>${pos.leverage}x</td>
                    <td>$${pos.entryPrice.toLocaleString()}</td>
                    <td>$${pos.markPrice.toLocaleString()}</td>
                    <td class="error-text">$${pos.liquidationPrice.toLocaleString()}</td>
                    <td class="${pnlClass}">+$${pos.pnl.toFixed(2)}</td>
                `;
                body.appendChild(tr);
            });
            
            renderExpositionChart(positions);
        });

    // Kelly criterion simulation
    const winRateInput = document.getElementById('win-rate');
    const profitRatioInput = document.getElementById('profit-ratio');
    const kellyOutput = document.getElementById('kelly-sug-fraction');
    
    function updateKelly() {
        const p = parseFloat(winRateInput.value) / 100.0;
        const b = parseFloat(profitRatioInput.value);
        const q = 1 - p;
        // Kelly Formula: f = (bp - q) / b
        const f = (b * p - q) / b;
        const suggestion = Math.max(0, f * 100);
        kellyOutput.innerText = suggestion.toFixed(1) + '%';
        if (suggestion > 0) {
            kellyOutput.className = 'success-text';
        } else {
            kellyOutput.className = 'error-text';
        }
    }
    
    winRateInput.addEventListener('input', updateKelly);
    profitRatioInput.addEventListener('input', updateKelly);
    
    // Leverage slider
    const levRange = document.getElementById('range-leverage');
    const levVal = document.getElementById('val-leverage');
    levRange.addEventListener('input', () => {
        levVal.innerText = levRange.value + 'x';
    });
});

let expoChart = null;
function renderExpositionChart(positions) {
    const ctx = document.getElementById('tradingChart').getContext('2d');
    const labels = positions.map(p => p.symbol);
    const margins = positions.map(p => p.margin);
    
    expoChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: margins,
                backgroundColor: ['#8b5cf6', '#3b82f6', '#ec4898'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#f3f4f6' }
                }
            }
        }
    });
}
