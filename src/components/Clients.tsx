import React from 'react';
import { CLIENTS } from '../data';

export const Clients: React.FC = () => {
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="clients-grid"
        >
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div>
              <span className="section-tag">CLIENTS (08)</span>
              <h2 className="section-title">
                BRANDS<br />I’VE WORKED<br />WITH
              </h2>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: '22px',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.35,
                margin: 0,
              }}
            >
              The goal is always the same: design that communicates clearly and leaves a lasting impression.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#ababab',
                textTransform: 'uppercase',
                lineHeight: 1.45,
                letterSpacing: '0.02em',
                maxWidth: '440px',
                margin: 0,
              }}
            >
              I COLLABORATE WITH COMPANIES WHO CARE ABOUT THOUGHTFUL DIGITAL PRESENCE. EACH PROJECT IS SHAPED THROUGH UNDERSTANDING, REFINEMENT, AND ATTENTION TO DETAIL.
            </p>

            <div style={{ marginTop: '10px' }}>
              <a href="#contact" className="btn-pill">
                BOOK A CALL ↗
              </a>
            </div>
          </div>

          {/* Right Column: 8 Client Rows */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                href={client.link}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  textDecoration: 'none',
                  color: '#ffffff',
                  transition: 'padding-left 0.25s ease, color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = '12px';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-host)',
                    fontSize: '22px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {client.name}
                </span>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {client.year}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .clients-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
