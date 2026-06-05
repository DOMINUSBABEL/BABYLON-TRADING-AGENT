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

$$P_{liq} = P_{entrada} \times \left(1 - \frac{1}{L} + MMR\right)$$ (Para posiciones LONG)

Donde:
* $L$ es el nivel de apalancamiento (Leverage).
* $MMR$ es el porcentaje de margen de mantenimiento exigido por Binance (típicamente 0.004).

---

## 🔌 4. Protocolo de Contexto MCP de Trading

Este agente aprovecha la estructura de **Model Context Protocol (MCP)** para comunicarse con fuentes de datos externas:

1. **Binance Futures MCP (`mcp-servers/binance-mcp.json`)**: 
   Puente seguro para consultar el precio actual del libro, saldos de cuenta y despachar las órdenes de límite de forma local.
2. **SQLite Trading MCP (`mcp-servers/sqlite-mcp.json`)**:
   Inscribe y lee de forma directa los reportes de rendimiento y los trades ejecutados en la base de datos `db/trading.sqlite`.

---

## 📁 5. Estructura de Archivos

* `server.js`: Punto de entrada del servidor Express.
* `db/schema.sql`: Esquema de la base de datos SQLite para logs de trades.
* `skills/market-analysis/`: Indicadores de trading (RSI, MACD, Bollinger, Fibonacci).
* `skills/futures-risk/`: Calculadoras de Kelly y precio de liquidación.
* `public/`: Panel UI interactivo violeta/azul para monitorear el balance y regular el apalancamiento.
* `tests/`: Suite de pruebas unitarias locales en Jest.
