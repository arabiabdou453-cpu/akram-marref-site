import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

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
        <div style={{ marginBottom: '60px' }}>
          <span className="section-tag">TESTIMONIALS (04)</span>
          <h2 className="section-title">WORDS THAT CARRY WEIGHT</h2>
        </div>

        {/* Testimonial Card Box */}
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '60px 50px',
            backgroundColor: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            position: 'relative',
          }}
          className="testimonial-box"
        >
          {/* Quote text */}
          <blockquote
            style={{
              fontFamily: 'var(--font-host)',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 400,
              lineHeight: 1.35,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
            }}
          >
            {current.quote}
          </blockquote>

          {/* Author Details + Controls Row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: '#222',
                }}
              >
                <img
                  src={current.avatar}
                  alt={current.author}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    letterSpacing: '0.04em',
                  }}
                >
                  {current.author}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#ababab',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    marginTop: '2px',
                  }}
                >
                  {current.role}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={prev}
                className="btn-pill"
                style={{ padding: '8px 18px', fontSize: '11px' }}
                aria-label="Previous Testimonial"
              >
                ← PREV
              </button>
              <button
                onClick={next}
                className="btn-pill"
                style={{ padding: '8px 18px', fontSize: '11px' }}
                aria-label="Next Testimonial"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .testimonial-box {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
