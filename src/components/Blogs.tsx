import React from 'react';
import { BLOG_POSTS } from '../data';

export const Blogs: React.FC = () => {
  return (
    <section
      id="blogs"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0e0e0e',
        padding: '120px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
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
            <span className="section-tag">BLOGS</span>
            <h2 className="section-title">
              STORIES BEHIND<br />THE WORK
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignSelf: 'flex-end',
            }}
          >
            <p className="section-desc">
              I WRITE TO UNPACK THE THINKING BEHIND THE WORK — THE CHOICES, THE REASONING, AND THE QUIET DECISIONS THAT SHAPE HOW A PROJECT FEELS AND PERFORMS.
            </p>
            <div>
              <a href="#blogs" className="btn-pill">
                READ MORE BLOGS ↗
              </a>
            </div>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}
          className="blogs-grid"
        >
          {BLOG_POSTS.map((post) => (
            <a
              key={post.title}
              href={post.link}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '36px 30px',
                backgroundColor: '#121212',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '12px',
                minHeight: '260px',
                textDecoration: 'none',
                color: '#ffffff',
                transition: 'border-color 0.25s ease, transform 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: '#ababab',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-host)',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  margin: '30px 0 10px',
                }}
              >
                {post.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.65)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>READ ARTICLE</span>
                <span>↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 809px) {
          .blogs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
