import React from 'react';
import { META_ITEMS } from '../data';

export const MetaBar: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0',
      }}
    >
      <div className="site-container" style={{ position: 'relative' }}>
        {/* Crosshair marks at boundaries */}
        <span className="crosshair-corner crosshair-tl">+</span>
        <span className="crosshair-corner crosshair-tr">+</span>
        <span className="crosshair-corner crosshair-bl">+</span>
        <span className="crosshair-corner crosshair-br">+</span>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            width: '100%',
          }}
          className="metabar-grid"
        >
          {META_ITEMS.map((item, index) => (
            <div
              key={item.label}
              style={{
                padding: '24px 20px',
                borderRight: index < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'relative',
              }}
              className="metabar-col"
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#ababab',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-host)',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .metabar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .metabar-col:nth-child(2) {
            border-right: none !important;
          }
          .metabar-col:nth-child(1),
          .metabar-col:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
    </section>
  );
};
