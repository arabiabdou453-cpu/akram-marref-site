import React, { useState } from 'react';

export const FloatingBadge: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-end',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#181818',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '9999px',
          padding: '6px 14px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-host)',
            fontSize: '11px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          New Release
        </span>
        <button
          onClick={() => setVisible(false)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.5)',
            cursor: 'pointer',
            fontSize: '14px',
            lineHeight: 1,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="Close Announcement"
        >
          ×
        </button>
      </div>

      <a
        href="#contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#ffffff',
          color: '#0e0e0e',
          border: 'none',
          borderRadius: '9999px',
          padding: '10px 18px',
          textDecoration: 'none',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 600,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <span>Use for free</span>
      </a>
    </div>
  );
};
