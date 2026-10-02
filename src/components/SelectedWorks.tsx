import React from 'react';
import { PROJECTS } from '../data';

export const SelectedWorks: React.FC = () => {
  return (
    <section
      id="works"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '120px 0',
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
            <span className="section-tag">SELECTED WORKS (05)</span>
            <h2 className="section-title">
              A COLLECTION<br />OF REFINED DIGITAL EXPERIENCES
            </h2>
          </div>
          <p className="section-desc" style={{ alignSelf: 'flex-end' }}>
            EVERY PROJECT HERE WAS SHAPED WITH INTENTION — FROM LAYOUT AND TYPOGRAPHY TO INTERACTION AND TONE.
          </p>
        </div>

        {/* Project Cards List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px',
          }}
        >
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: '#141414',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              {/* Mockup Image Display */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#0b0b0b',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.025)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Project Info Footer */}
              <div
                style={{
                  padding: '24px 30px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: '#121212',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-host)',
                    fontSize: '26px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        color: 'rgba(255, 255, 255, 0.65)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-host)',
              fontSize: '18px',
              fontWeight: 400,
              color: '#ffffff',
              maxWidth: '560px',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            These selected projects reflect my approach to clarity, usability and design. You can explore additional case studies and work examples.
          </p>

          <a href="#works" className="btn-pill">
            EXPLORE ALL WORKS ↗
          </a>
        </div>
      </div>
    </section>
  );
};
