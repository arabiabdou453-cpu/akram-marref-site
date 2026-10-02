import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '750px',
        maxHeight: '1080px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '64px',
        paddingBottom: '24px',
        overflow: 'hidden',
        backgroundColor: '#0e0e0e',
      }}
    >
      {/* Full-width Background Image with Subject and Spotlight */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/assets/asset_4.png"
          alt="Elian Kent"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Seamless bottom fade into metabar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '180px',
            background: 'linear-gradient(to bottom, transparent, rgba(14, 14, 14, 0.75) 60%, #0e0e0e 100%)',
          }}
        />
      </div>

      {/* Main Content Layout */}
      <div
        className="site-container"
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingTop: '20px',
        }}
      >
        {/* Top Typography Row: ELIAN + Overlay Statement Card */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            userSelect: 'none',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-host)',
              fontWeight: 700,
              fontSize: 'clamp(64px, 15vw, 220px)',
              lineHeight: 0.82,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: 0,
            }}
          >
            ELIAN
          </h1>

          {/* Floating Mission Statement Card */}
          <div
            className="hero-overlay-card"
            style={{
              maxWidth: '380px',
              backgroundColor: 'rgba(14, 14, 14, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '16px 20px',
              marginTop: '15px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: '11px',
                fontWeight: 600,
                lineHeight: 1.45,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: 0,
              }}
            >
              I CREATE DIGITAL EXPERIENCES THAT FEEL EFFORTLESS TO USE AND POWERFUL IN IMPACT—FRAMER SITES THAT HELP MODERN BRANDS GROW WITH CLARITY AND CONFIDENCE
            </p>
          </div>
        </div>

        {/* Bottom Typography Row: KENT */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            userSelect: 'none',
            marginBottom: '20px',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-host)',
              fontWeight: 700,
              fontSize: 'clamp(64px, 15vw, 220px)',
              lineHeight: 0.82,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: 0,
            }}
          >
            KENT
          </h1>
        </div>

        {/* Bottom Status / Badges Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <span style={{ color: '#ffffff' }}>✦</span>
            <span>CERTIFIED PRO EXPERT</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block',
              }}
            />
            <span>AVAILABLE FOR Q1/Q2</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .hero-overlay-card {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
