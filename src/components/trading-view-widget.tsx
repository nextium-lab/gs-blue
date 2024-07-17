"use client"
import { useEffect } from 'react';

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "description": "", "proName": "NASDAQ:TSLA" },
        { "description": "", "proName": "NASDAQ:AAPL" },
        { "description": "", "proName": "NASDAQ:NVDA" },
        { "description": "", "proName": "NASDAQ:MSFT" },
        { "description": "", "proName": "NASDAQ:AMD" },
        { "description": "", "proName": "NASDAQ:META" },
        { "description": "", "proName": "NASDAQ:NFLX" },
        { "description": "", "proName": "TURQUOISE:SHELL" },
        { "description": "", "proName": "TURQUOISE:BARCL" },
        { "description": "", "proName": "TURQUOISE:RRL" },
        { "description": "", "proName": "TURQUOISE:BPL" },
        { "description": "", "proName": "TURQUOISE:BTL" },
        { "description": "", "proName": "TURQUOISE:TSCOL" },
        { "description": "", "proName": "TURQUOISE:BATSL" },
        { "description": "", "proName": "TURQUOISE:ULVRL" },
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "regular",
      "locale": "en"
    });

    const container = document.getElementById('tradingview-widget-container');
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
