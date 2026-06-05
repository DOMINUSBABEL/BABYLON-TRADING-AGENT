# 📊 BABYLON-TRADING-AGENT
## Operador y Optimizador de Portafolio en Binance Futures
### Ecosistema de Finanzas Descentralizadas BABYLON.IA (SOTA Framework)

---

## 📌 1. Visión General e Impacto Estratégico

El **BABYLON-TRADING-AGENT** es el brazo de trading cuantitativo de **BABYLON.IA**, diseñado específicamente para administrar de manera autónoma y optimizada el portafolio en el mercado de futuros de Binance.

Operando de manera 100% local, el agente mitiga el mayor riesgo de seguridad de las pymes: **la filtración de llaves API a la nube**. El agente utiliza el protocolo de contexto MCP para interactuar con la API de Binance Sandbox/Producción sin que los datos de balance, posiciones o claves privadas salgan del servidor de la empresa.

---

## 🧠 2. Fundamentos de Dialéctica en el Trading

Bajo el Mandato Central Geist, el agente no procesa órdenes basándose únicamente en indicadores estáticos. Las decisiones pasan por un **Filtro Dialéctico Hegeliano**:

```text
  [ TESIS: Entrada Long RSI/EMA ] ──> [ ANTÍTESIS: Volatilidad y Liquidación ] 
                                             │
                                             ▼
                                  [ SÍNTESIS: Kelly 3x + Stop Loss ]
```

1. **Tesis (Oportunidad)**: Cruce de medias móviles o señal de compra de RSI en zona de sobreventa que sugiere abrir un Long.
2. **Antítesis (Restricción)**: El riesgo de liquidación es elevado debido a volatilidad implícita o a tasas de financiación (Funding Rate) extremadamente negativas para los longs.
3. **Síntesis (Optimización)**: Reducir el apalancamiento mediante el cálculo de la fracción Kelly ajustada y programar la orden con un stop-loss dinámico bajo la EMA.

---

## 📊 3. Modelos Matemáticos y SOTA Implementados

El núcleo algorítmico del agente realiza cálculos matemáticos en tiempo real para optimizar la toma de decisiones:

### A. Criterio de Sizing de Kelly (Kelly Criterion)
Se utiliza para determinar el tamaño óptimo de la posición para evitar la ruina de la cuenta basándose en la ventaja estadística (edge):

$$f^* = \frac{bp - q}{b}$$

Donde:
* $f^*$ es la fracción del balance total de la cuenta a destinar a la operación.
* $b$ es la relación riesgo/recompensa (Risk/Reward Ratio).
* $p$ es la tasa de acierto histórica del par analizado.
* $q$ es la probabilidad de pérdida ($1 - p$).

### B. Fórmula de Liquidación en Aislado (Isolated Margin)
Calcula con exactitud matemática el punto de colapso de la posición para evitar el barrido de fondos:

$$P_{liq} = P_{entrada} \times \left(1 - \frac{1}{L} + MMR\right)$$ (LONG)
$$P_{liq} = P_{entrada} \times \left(1 + \frac{1}{L} - MMR\right)$$ (SHORT)

Donde:
* $L$ es el nivel de apalancamiento (Leverage).
* $MMR$ es el porcentaje de margen de mantenimiento exigido por Binance (típicamente 0.004).

### C. Modelo de Volatilidad GARCH(1,1) (Generalized Autoregressive Conditional Heteroskedasticity)
Implementado localmente mediante scripts en Python para estimar la volatilidad condicional de los retornos cripto y ajustar el stop loss dinámico frente a ensanchamientos repentinos del spread:

$$\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2$$

Donde:
* $\sigma_t^2$ es la varianza condicional proyectada para el periodo $t$.
* $\omega$ es la constante de varianza de fondo.
* $\alpha$ es el coeficiente de noticias recientes (residuos al cuadrado).
* $\beta$ es el coeficiente de persistencia de volatilidad anterior.

### D. Algoritmos de Ejecución TWAP y VWAP
Para ejecutar grandes órdenes en el mercado de futuros de Binance reduciendo el deslizamiento de precio (slippage) y el impacto en el libro, el bot fracciona el lote total:
* **TWAP (Time-Weighted Average Price)**: Slices de volumen fijos distribuidos de manera lineal en intervalos regulares de tiempo:
  
  $$\Delta t = \frac{T_{total}}{N}$$

* **VWAP (Volume-Weighted Average Price)**: Ponderación de precio promedio basada en el volumen negociado del bloque:
  
  $$VWAP = \frac{\sum_{i} P_i \cdot V_i}{\sum_{i} V_i}$$

### E. Métricas de Rendimiento Sharpe & Sortino
Para calificar la viabilidad de la estrategia dialéctica implementada en el historial de transacciones, se calculan ratios de retorno ajustados por riesgo:

$$Sharpe = \frac{R_p - R_f}{\sigma_p}$$
$$Sortino = \frac{R_p - R_f}{\sigma_d}$$

Donde:
* $R_p$ representa el retorno acumulado de la cuenta de trading.
* $R_f$ es la tasa libre de riesgo.
* $\sigma_p$ es la desviación estándar total de los retornos.
* $\sigma_d$ es la desviación estándar de los retornos negativos (downside deviation).

---

## 🔌 4. Protocolo de Contexto MCP de Trading

Este agente aprovecha la estructura de **Model Context Protocol (MCP)** para comunicarse con fuentes de datos externas:

1. **Binance Futures MCP (`mcp-servers/binance-mcp.json`)**: 
   Puente seguro para consultar el precio actual del libro, saldos de cuenta y despachar las órdenes de límite de forma local. Configurado con límites de apalancamiento y Stop de Drawdown.
2. **SQLite Trading MCP (`mcp-servers/sqlite-mcp.json`)**:
   Inscribe y lee de forma directa los reportes de rendimiento y los trades ejecutados en la base de datos `db/trading.sqlite`.

---

## 📁 5. Estructura de Archivos

```text
C:\Users\jegom\BABYLON-TRADING-AGENT\
├── package.json
├── server.js
├── history.json
├── .env.example
├── db/
│   ├── schema.sql
│   └── init_db.js
├── mcp-servers/
│   ├── binance-mcp.json
│   └── sqlite-mcp.json
├── config/
│   └── defaults.js
├── routes/
│   ├── trading.js
│   └── analytics.js
├── middlewares/
│   ├── auth.js
│   └── rate_limiter.js
├── skills/
│   ├── market-analysis/
│   │   ├── rsi.js
│   │   ├── macd.js
│   │   ├── ema.js
│   │   ├── bollinger.js
│   │   ├── fibonacci.js
│   │   ├── adx.js
│   │   ├── funding_rate.py
│   │   ├── order_book.py
│   │   └── garch.py
│   ├── futures-risk/
│   │   ├── liquidation.js
│   │   ├── position_sizing.py
│   │   └── sharpe.js
│   ├── order-execution/
│   │   ├── stop_loss.js
│   │   ├── take_profit.js
│   │   ├── trailing_stop.js
│   │   ├── twap.js
│   │   └── vwap.js
│   └── portfolio-optimization/
│       ├── markowitz.py
│       └── rebalancing.py
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── tests/
    ├── fixtures/
    │   └── sample_trades.json
    ├── indicators.test.js
    ├── risk.test.js
    ├── markowitz.test.js
    ├── twap.test.js
    └── server.test.js
```

---

## 🚀 6. Instalación y Despliegue en Producción

### Prerrequisitos
* Node.js v20+
* Python 3.11+ con librerías numéricas (`numpy`, `pandas`) instaladas.

### Despliegue con Docker y Healthcheck
El agente de trading cuantitativo corre dentro de un contenedor alpino que incluye tanto Node como Python. Para construir e inicializar el contenedor local de manera resiliente:
```bash
docker-compose up --build -d
```
Accede al panel de control desde: `http://localhost:4004`
