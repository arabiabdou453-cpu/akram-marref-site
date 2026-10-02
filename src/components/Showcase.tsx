import React, { useRef } from 'react';

export const Showcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '100px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="site-container"
        style={{
          position: 'relative',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Typography */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-host)',
              fontWeight: 800,
              fontSize: 'clamp(90px, 18vw, 260px)',
              lineHeight: 0.8,
              letterSpacing: '-0.05em',
              color: 'rgba(255, 255, 255, 0.95)',
              textTransform: 'uppercase',
            }}
          >
            SHOW
          </span>
          <span
            style={{
              fontFamily: 'var(--font-host)',
              fontWeight: 800,
              fontSize: 'clamp(90px, 18vw, 260px)',
              lineHeight: 0.8,
              letterSpacing: '-0.05em',
              color: 'rgba(255, 255, 255, 0.95)',
              textTransform: 'uppercase',
            }}
          >
            CASE
          </span>
        </div>

        {/* Video Card in Center */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '680px',
            aspectRatio: '16/10',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
            backgroundColor: '#000000',
          }}
        >
          <video
            ref={videoRef}
            src="/assets/asset_27.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};
