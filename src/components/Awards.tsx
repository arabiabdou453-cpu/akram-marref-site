import React from 'react';
import { AWARDS } from '../data';

export const Awards: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '120px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="site-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '70px',
          }}
        >
          <div>
            <span className="section-tag">AWARDS & RECOGNITIONS</span>
            <h2 className="section-title">
              AWARDS THAT<br />DEFINE THE CRAFT
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-host)',
              fontSize: '20px',
              fontWeight: 400,
              color: '#ffffff',
              maxWidth: '460px',
              lineHeight: 1.35,
              margin: 0,
              alignSelf: 'flex-end',
            }}
          >
            Over the years, my work in development, design, and modern web development has been recognized for its clarity, creativity, and technical precision.
          </p>
        </div>

        {/* 4 Awards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
            position: 'relative',
          }}
          className="awards-grid"
        >
          <span className="crosshair-corner crosshair-tl">+</span>
          <span className="crosshair-corner crosshair-tr">+</span>
          <span className="crosshair-corner crosshair-bl">+</span>
          <span className="crosshair-corner crosshair-br">+</span>

          {AWARDS.map((award, idx) => (
            <div
              key={award.title}
              style={{
                padding: '40px 24px',
                borderRight: idx < 3 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '220px',
              }}
              className="award-card"
            >
              <h3
                style={{
                  fontFamily: 'var(--font-host)',
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {award.title} <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>({award.count})</span>
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  lineHeight: 1.45,
                  color: '#ababab',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  margin: 0,
                }}
              >
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .awards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .award-card:nth-child(2) {
            border-right: none !important;
          }
          .award-card:nth-child(1),
          .award-card:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }
        }
      `}</style>
    </section>
  );
};
