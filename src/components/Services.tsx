import React, { useState } from 'react';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
            <span className="section-tag light-theme">SERVICES (04)</span>
            <h2 className="section-title light-theme">
              DESIGN<br />THAT SPEAKS<br />FOR YOU
            </h2>
          </div>
          <p className="section-desc light-theme" style={{ alignSelf: 'flex-end' }}>
            I HELP BRANDS AND STARTUPS CREATE DIGITAL EXPERIENCES THAT FEEL CLEAR, MODERN, AND EFFORTLESS TO USE.
          </p>
        </div>

        {/* Top 2 Visual Banners */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            marginBottom: '80px',
          }}
          className="services-banners"
        >
          <div
            style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#d8d8d8',
              aspectRatio: '16/10',
            }}
          >
            <img
              src="/assets/asset_12.png"
              alt="Workspace setup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div
            style={{
              width: '100%',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#d8d8d8',
              aspectRatio: '16/10',
            }}
          >
            <img
              src="/assets/asset_13.png"
              alt="Abstract motion render"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* 4 Interactive Service Rows */}
        <div
          style={{
            borderTop: '1px solid rgba(0, 0, 0, 0.15)',
            position: 'relative',
          }}
        >
          {SERVICES.map((service, index) => {
            const isOpen = activeService === index;
            return (
              <div
                key={service.number}
                style={{
                  borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
                  padding: '32px 0',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onClick={() => setActiveService(isOpen ? -1 : index)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        color: 'rgba(14, 14, 14, 0.5)',
                        fontWeight: 600,
                      }}
                    >
                      {service.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-host)',
                        fontSize: '22px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        color: '#0e0e0e',
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                      style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap',
                      }}
                    >
                      {service.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '10px',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(0, 0, 0, 0.06)',
                            color: 'rgba(14, 14, 14, 0.75)',
                            textTransform: 'uppercase',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '20px',
                        fontWeight: 300,
                        color: '#0e0e0e',
                        marginLeft: '12px',
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </div>

                {/* Expanded Content with Preview Image */}
                {isOpen && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1.4fr 0.6fr',
                      gap: '40px',
                      alignItems: 'center',
                      marginTop: '28px',
                      paddingTop: '20px',
                      borderTop: '1px dashed rgba(0, 0, 0, 0.1)',
                    }}
                    className="service-expanded"
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        lineHeight: 1.5,
                        color: 'rgba(14, 14, 14, 0.8)',
                        textTransform: 'uppercase',
                        margin: 0,
                      }}
                    >
                      {service.description}
                    </p>

                    <div
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        aspectRatio: '4/3',
                        backgroundColor: '#dcdcdc',
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .services-banners {
            grid-template-columns: 1fr !important;
          }
          .service-expanded {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
