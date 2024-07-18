"use client";
import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const existingScript = document.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]');
    if (existingScript) {
      containerRef.current.appendChild(existingScript);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'FX:EURUSD',
      interval: 'D',
      timezone: 'America/Sao_Paulo',
      theme: 'dark',
      style: '1',
      locale: 'br',
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      details: true,
      hotlist: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    });
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className='container h-[600px] py-10'>
        <div className="tradingview-widget-container" ref={containerRef} style={{ height: '100%', width: '100%' }} >
            <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}></div>
        </div>
    </section>
  );
};

export default memo(TradingViewWidget);
