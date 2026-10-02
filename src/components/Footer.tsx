import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '100px 0 60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        {/* Top 4 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '60px',
            marginBottom: '100px',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v8H12v8H4V4z" fill="#ffffff" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-host)',
                  fontWeight: 700,
                  fontSize: '18px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                ELIAN KENT
              </span>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                lineHeight: 1.45,
                color: '#ababab',
                textTransform: 'uppercase',
                maxWidth: '360px',
                margin: 0,
              }}
            >
              CRAFTING THOUGHTFUL DIGITAL EXPERIENCES BUILT ON CLARITY, PURPOSE, AND PRECISION.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                lineHeight: 1.45,
                color: 'rgba(255, 255, 255, 0.45)',
                textTransform: 'uppercase',
                maxWidth: '360px',
                margin: 0,
              }}
            >
              CREATING EXPERIENCES THAT BALANCE AESTHETICS, USABILITY, AND INTENT.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#ababab',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              NAVIGATION
            </span>
            {['HOME', 'ABOUT', 'WORKS', 'BLOGS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#ababab',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              SOCIALS
            </span>
            {['TWITTER (X)', 'INSTAGRAM', 'FRAMER', 'LINKEDIN', 'DRIBBBLE'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Location & Time */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: '#ababab',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '4px',
              }}
            >
              LOCATION
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              LONDON, UK
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              GMT (UTC+0)
            </span>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            userSelect: 'none',
            pointerEvents: 'none',
            marginBottom: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '20px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-host)',
              fontWeight: 800,
              fontSize: 'clamp(64px, 14vw, 220px)',
              lineHeight: 0.85,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.07)',
              whiteSpace: 'nowrap',
              textAlign: 'center',
            }}
          >
            ELIAN KENT
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.45)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          <span>© 2025 ELIAN KENT. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED & BUILT BY ZAID KHAN</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};
