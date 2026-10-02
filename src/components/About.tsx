import React from 'react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '120px 0',
      }}
    >
      <div className="site-container" style={{ position: 'relative' }}>
        {/* Section tag */}
        <div style={{ marginBottom: '40px' }}>
          <span className="section-tag">ABOUT</span>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Manifesto Statement */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '32px',
              }}
            >
              I’M A FRAMER DESIGNER FROM LONDON, WORKING WITH BRANDS AND FOUNDERS TO CREATE WEBSITES THAT FEEL CLEAR, CONFIDENT, AND EASY TO USE. I ENJOY TAKING IDEAS THAT FEEL MESSY OR COMPLICATED AND TURNING THEM INTO SOMETHING SIMPLE AND STRUCTURED.
            </h2>
            <h2
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: '#ffffff',
              }}
            >
              THE PROCESS SO EVERYTHING FEELS ALIGNED AND INTENTIONAL. MY GOAL IS ALWAYS THE SAME: TO CREATE WORK THAT FEELS GOOD, WORKS WELL, AND LASTS.
            </h2>
          </div>

          {/* Right: Photo Card & Quote */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
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
                src="/assets/asset_5.png"
                alt="Elian Kent"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                lineHeight: 1.45,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                margin: 0,
              }}
            >
              I BUILD WEBSITES THAT FEEL AS GOOD AS THEY LOOK. CLEAN, INTENTIONAL, AND MADE TO LEAVE AN IMPRESSION.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
