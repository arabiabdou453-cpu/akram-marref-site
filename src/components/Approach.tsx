import React from 'react';
import { APPROACH_STEPS } from '../data';

export const Approach: React.FC = () => {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ededed',
        color: '#0e0e0e',
        padding: '140px 0',
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
            <span className="section-tag light-theme">APPROACH (04)</span>
            <h2 className="section-title light-theme">CREATIVE<br />APPROACH</h2>
          </div>
          <p className="section-desc light-theme" style={{ alignSelf: 'flex-end' }}>
            EVERY PROJECT IS DIFFERENT, BUT THE PATH TO GREAT WORK STAYS THE SAME — A BALANCE OF RESEARCH, CLARITY, CREATIVITY, AND REFINEMENT.
          </p>
        </div>

        {/* 2-Column Grid: Photo Left, 4 Steps Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: '50px',
            alignItems: 'stretch',
          }}
          className="approach-grid"
        >
          {/* Left Photo */}
          <div
            style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#d8d8d8',
              height: '100%',
              minHeight: '440px',
            }}
          >
            <img
              src="/assets/asset_19.png"
              alt="Creative workspace flatlay"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Right 2x2 Steps Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
            }}
            className="steps-grid"
          >
            {APPROACH_STEPS.map((step) => (
              <div
                key={step.number}
                style={{
                  padding: '32px 28px',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '28px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(14, 14, 14, 0.45)',
                  }}
                >
                  {step.number}
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-host)',
                      fontSize: '18px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '-0.02em',
                      color: '#0e0e0e',
                      margin: 0,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      lineHeight: 1.45,
                      color: 'rgba(14, 14, 14, 0.7)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
          .steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
