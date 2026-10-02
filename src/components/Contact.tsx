import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '120px 0 140px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Heading & Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
              <span className="section-tag">CONTACT</span>
              <h2 className="section-title">
                HAVE A PROJECT<br />IN MIND?
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
              I’m always open to collaborations and creative challenges.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginTop: '20px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#ababab',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  DIRECT EMAIL
                </span>
                <a
                  href="mailto:hello@eliankent.com"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  HELLO@ELIANKENT.COM
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: '#ababab',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    display: 'block',
                    marginBottom: '4px',
                  }}
                >
                  PHONE / WHATSAPP
                </span>
                <a
                  href="tel:+442079460991"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                  }}
                >
                  +44 20 7946 0991
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div
            style={{
              padding: '48px 40px',
              backgroundColor: '#121212',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-host)',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '12px',
                  }}
                >
                  THANK YOU!
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: '#ababab',
                  }}
                >
                  Your message has been received. I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#ababab',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#ababab',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#ababab',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    placeholder="Framer Website / Rebrand / UI Design"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: '#ababab',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your goals, timeline, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-pill"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '12px',
                    marginTop: '8px',
                  }}
                >
                  SEND REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
          }
        }
      `}</style>
    </section>
  );
};
