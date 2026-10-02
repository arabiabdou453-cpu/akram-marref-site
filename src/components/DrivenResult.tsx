import React, { useState, useEffect, useRef } from 'react';
import { METRICS } from '../data';

export const DrivenResult: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          // Animate counters
          const duration = 1500;
          const steps = 30;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts(
              METRICS.map((m) => {
                const val = m.targetNumber * progress;
                return m.targetNumber % 1 === 0 ? Math.round(val) : parseFloat(val.toFixed(1));
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(METRICS.map((m) => m.targetNumber));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (metric: (typeof METRICS)[0], index: number) => {
    const num = counts[index];
    if (metric.targetNumber % 1 !== 0) {
      return num.toFixed(1);
    }
    return `${num}${metric.suffix}`;
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '100px 0 120px',
      }}
    >
      <div className="site-container">
        {/* Top Grid: Photo + Statement */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
          className="driven-top-grid"
        >
          {/* Close-up Portrait */}
          <div
            style={{
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backgroundColor: '#161616',
            }}
          >
            <img
              src="/assets/asset_6.png"
              alt="Elian Kent"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Driven Result Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span className="section-tag">DRIVEN RESULT</span>
            <h3
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: 'clamp(32px, 4vw, 50px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: 0,
              }}
            >
              THE WORK DOESN’T JUST LOOK GOOD — IT PERFORMS. HERE’S THE IMPACT BEHIND THE DESIGN.
            </h3>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            position: 'relative',
          }}
          className="metrics-grid"
        >
          {/* Crosshairs */}
          <span className="crosshair-corner crosshair-tl">+</span>
          <span className="crosshair-corner crosshair-tr">+</span>
          <span className="crosshair-corner crosshair-bl">+</span>
          <span className="crosshair-corner crosshair-br">+</span>

          {METRICS.map((metric, idx) => (
            <div
              key={metric.title}
              style={{
                padding: '40px 24px',
                borderRight: idx < 3 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
                position: 'relative',
              }}
              className="metric-card"
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-host)',
                  fontSize: 'clamp(54px, 7vw, 100px)',
                  fontWeight: 700,
                  lineHeight: 0.85,
                  letterSpacing: '-0.05em',
                  color: '#ffffff',
                  marginBottom: '28px',
                }}
              >
                {formatNumber(metric, idx)}
              </div>

              {/* Title & Description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    letterSpacing: '0.05em',
                    margin: 0,
                  }}
                >
                  {metric.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    lineHeight: 1.4,
                    color: '#ababab',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    margin: 0,
                  }}
                >
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .driven-top-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .metric-card:nth-child(2) {
            border-right: none !important;
          }
          .metric-card:nth-child(1),
          .metric-card:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
        }
      `}</style>
    </section>
  );
};
