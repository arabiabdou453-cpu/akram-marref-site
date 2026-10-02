import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

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
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            FREQUENTLY<br />ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            marginBottom: '70px',
          }}
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.question}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  padding: '28px 0',
                  cursor: 'pointer',
                }}
                onClick={() => toggle(idx)}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-host)',
                      fontSize: '20px',
                      fontWeight: 500,
                      color: '#ffffff',
                      letterSpacing: '-0.01em',
                      margin: 0,
                    }}
                  >
                    {item.question}
                  </h3>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '20px',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </div>

                {isOpen && (
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      lineHeight: 1.5,
                      color: '#ababab',
                      marginTop: '16px',
                      maxWidth: '780px',
                    }}
                  >
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Didn't Find Answer Card */}
        <div
          style={{
            padding: '48px 40px',
            backgroundColor: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h4
              style={{
                fontFamily: 'var(--font-host)',
                fontSize: '24px',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#ffffff',
                margin: 0,
              }}
            >
              DIDN’T FIND YOUR ANSWER?
            </h4>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#ababab',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                margin: 0,
              }}
            >
              NO WORRIES — JUST REACH OUT. I’M ALWAYS HAPPY TO CLARIFY OR WALK YOU THROUGH ANYTHING.
            </p>
          </div>

          <a href="#contact" className="btn-pill">
            SEND ME A MESSAGE ↗
          </a>
        </div>
      </div>
    </section>
  );
};
