import React, { useEffect, useRef } from 'react';

// --- Global Styles Component ---
// We place all the original CSS here.
// This is the most robust way to handle complex CSS (media queries,
// pseudo-elements, keyframes) in a single-file React app.
const GlobalStyles = () => (
  <style>{`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background: #2d3142;
        color: #f5f5f5;
        overflow-x: hidden;
    }

    .funky-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: linear-gradient(135deg, #2d3142 0%, #3d2645 50%, #2d3142 100%);
    }

    .funky-bg::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 184, 77, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 77, 109, 0.1) 0%, transparent 50%);
        animation: floatBg 20s ease-in-out infinite;
    }

    @keyframes floatBg {
        0%, 100% { transform: scale(1) translateY(0); }
        50% { transform: scale(1.1) translateY(-20px); }
    }

    .decorative-shapes {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }

    .shape {
        position: absolute;
        opacity: 0.1;
        animation: float 15s infinite ease-in-out;
    }

    .shape:nth-child(1) {
        top: 10%;
        left: 10%;
        font-size: 60px;
        animation-delay: 0s;
    }

    .shape:nth-child(2) {
        top: 60%;
        right: 15%;
        font-size: 80px;
        animation-delay: 2s;
    }

    .shape:nth-child(3) {
        bottom: 20%;
        left: 20%;
        font-size: 50px;
        animation-delay: 4s;
    }

    .shape:nth-child(4) {
        top: 30%;
        right: 25%;
        font-size: 70px;
        animation-delay: 1s;
    }

    .shape:nth-child(5) {
        bottom: 40%;
        left: 50%;
        font-size: 55px;
        animation-delay: 3s;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(5deg); }
        75% { transform: translateY(20px) rotate(-5deg); }
    }

    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        padding: 40px 20px;
    }

    .spotlight-container {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .spotlight {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        height: 600px;
        background: radial-gradient(ellipse at top, rgba(255,184,77,0.3) 0%, rgba(255,107,107,0.1) 40%, transparent 70%);
        animation: spotlightPulse 4s ease-in-out infinite;
    }

    @keyframes spotlightPulse {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 0.8; }
    }

    .hero-content {
        z-index: 2;
        padding: 20px;
        max-width: 900px;
    }

    .logo {
        font-size: 5.5rem;
        font-weight: 900;
        letter-spacing: 12px;
        text-shadow: 
            4px 4px 0px #ff6b6b,
            8px 8px 0px rgba(0,0,0,0.3);
        margin-bottom: 20px;
        animation: fadeInBounce 1s ease-out;
        color: #ffb84d;
    }

    .subtitle {
        font-size: 2.2rem;
        letter-spacing: 6px;
        margin-bottom: 20px;
        color: #ff6b6b;
        font-weight: bold;
        animation: fadeInBounce 1.2s ease-out;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .college-badge {
        display: inline-block;
        background: rgba(255,107,107,0.2);
        padding: 10px 25px;
        border-radius: 25px;
        font-size: 1rem;
        letter-spacing: 2px;
        margin-bottom: 30px;
        border: 2px solid rgba(255,107,107,0.5);
        animation: fadeInBounce 1.4s ease-out;
    }

    .tagline {
        font-size: 1.4rem;
        margin-bottom: 40px;
        font-style: italic;
        color: #ffd4a3;
        animation: fadeInBounce 1.6s ease-out;
    }

    @keyframes fadeInBounce {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .cta-button {
        padding: 20px 50px;
        font-size: 1.3rem;
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 3px;
        transition: all 0.3s ease;
        animation: fadeInBounce 1.8s ease-out;
        box-shadow: 0 8px 25px rgba(255,107,107,0.5);
        position: relative;
        overflow: hidden;
    }

    .cta-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        transition: left 0.5s;
    }

    .cta-button:hover::before {
        left: 100%;
    }

    .cta-button:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 12px 35px rgba(255,107,107,0.7);
    }

    .section {
        padding: 100px 20px;
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
    }

    .section-title {
        font-size: 3.5rem;
        text-align: center;
        margin-bottom: 60px;
        color: #ffb84d;
        position: relative;
        font-weight: 900;
        text-shadow: 3px 3px 0px #ff6b6b;
    }

    .section-title::after {
        content: '';
        display: block;
        width: 150px;
        height: 5px;
        background: linear-gradient(90deg, #ff6b6b, #ffb84d, #ff6b6b);
        margin: 25px auto;
        border-radius: 10px;
    }

    .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px;
        margin-top: 50px;
    }

    .feature-card {
        background: rgba(255,107,107,0.1);
        padding: 45px;
        border-radius: 25px;
        text-align: center;
        backdrop-filter: blur(10px);
        border: 3px solid rgba(255,184,77,0.3);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .feature-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,184,77,0.1) 0%, transparent 70%);
        transition: transform 0.5s;
    }

    .feature-card:hover::before {
        transform: scale(1.5);
    }

    .feature-card:hover {
        transform: translateY(-15px) rotate(-2deg);
        border-color: rgba(255,107,107,0.6);
        box-shadow: 0 15px 40px rgba(255,107,107,0.3);
    }

    .feature-icon {
        font-size: 4rem;
        margin-bottom: 25px;
        filter: drop-shadow(3px 3px 5px rgba(0,0,0,0.3));
        position: relative;
        z-index: 1;
    }

    .feature-card h3 {
        font-size: 1.8rem;
        margin-bottom: 15px;
        color: #ffb84d;
        font-weight: bold;
        position: relative;
        z-index: 1;
    }

    .feature-card p {
        position: relative;
        z-index: 1;
        line-height: 1.6;
    }

    .event-section {
        background: linear-gradient(180deg, rgba(255,107,107,0.05) 0%, rgba(255,184,77,0.05) 100%);
        border-radius: 50px;
        padding: 100px 40px;
    }

    .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 35px;
        margin-top: 50px;
    }

    .event-card {
        background: rgba(45,49,66,0.7);
        padding: 35px;
        border-radius: 20px;
        border-left: 6px solid #ff6b6b;
        border-bottom: 6px solid #ffb84d;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .event-card:hover {
        transform: translateX(10px);
        box-shadow: -10px 10px 30px rgba(255,107,107,0.3);
    }

    .event-date {
        color: #ffb84d;
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 15px;
        letter-spacing: 1px;
    }

    .event-card h3 {
        font-size: 2rem;
        margin-bottom: 15px;
        color: #ff6b6b;
    }

    .microphone {
        display: inline-block;
        animation: swing 2s ease-in-out infinite;
        font-size: 5rem;
        margin: 40px 0;
        filter: drop-shadow(5px 5px 10px rgba(0,0,0,0.5));
    }

    @keyframes swing {
        0%, 100% { transform: rotate(-8deg); }
        50% { transform: rotate(8deg); }
    }

    .join-section {
        background: radial-gradient(circle at center, rgba(255,107,107,0.15) 0%, transparent 70%);
        border-radius: 50px;
        padding: 80px 40px;
    }

    footer {
        background: linear-gradient(180deg, #2d3142 0%, #1a1d2e 100%);
        padding: 60px 20px;
        text-align: center;
        border-top: 4px solid rgba(255,107,107,0.3);
    }

    .social-links {
        margin: 30px 0;
        display: flex;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .social-links a {
        color: #ffb84d;
        font-size: 1.8rem;
        text-decoration: none;
        transition: all 0.3s;
        padding: 15px 25px;
        background: rgba(255,107,107,0.1);
        border-radius: 15px;
        border: 2px solid rgba(255,184,77,0.3);
    }

    .social-links a:hover {
        color: #ff6b6b;
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(255,107,107,0.3);
    }

    @media (max-width: 768px) {
        .logo {
            font-size: 3.5rem;
            letter-spacing: 6px;
        }
        .subtitle {
            font-size: 1.5rem;
        }
        .tagline {
            font-size: 1.1rem;
        }
        .section-title {
            font-size: 2.5rem;
        }
    }
  `}</style>
);

// --- Background Component ---
const Background = () => (
  <>
    <div className="funky-bg"></div>
    <div className="decorative-shapes">
      <div className="shape">😂</div>
      <div className="shape">🎭</div>
      <div className="shape">⭐</div>
      <div className="shape">🎤</div>
      <div className="shape">😄</div>
    </div>
  </>
);

// --- Hero Component ---
const Hero = ({ onCtaClick }) => (
  <section className="hero">
    <div className="spotlight-container">
      <div className="spotlight"></div>
    </div>
    <div className="hero-content">
      <h1 className="logo">KÖMIKOS</h1>
      <p className="subtitle">COMEDY CLUB</p>
      <div className="college-badge">PROUDLY STARTED BY STUDENTS OF NIT TRICHY</div>
      <p className="tagline">"Where Future Legends Find Their Voice"</p>
      <button className="cta-button" onClick={onCtaClick}>
        JOIN US
      </button>
    </div>
  </section>
);

// --- Features Component ---
// const Features = () => (
//   <section className="section">
//     <h2 className="section-title">Why Kömikos?</h2>
//     <div className="features">
//       <div className="feature-card">
//         <div className="feature-icon">🎤</div>
//         <h3>Open Mic Nights</h3>
//         <p>Think you're funny? Prove it! Every Thursday, students can take the stage and show off their comedy chops. No experience needed, just bring your best material!</p>
//       </div>
//       <div className="feature-card">
//         <div className="feature-icon">⭐</div>
//         <h3>Pro Comedians</h3>
//         <p>Watch established comedians perform every weekend. Learn from the best while laughing your finals stress away. Past performers include top national acts!</p>
//       </div>
//       <div className="feature-card">
//         <div className="feature-icon">🎓</div>
//         <h3>Student Discounts</h3>
//         <p>College budget? No problem. Enjoy amazing comedy at student-friendly prices every show. Because laughter shouldn't break the bank!</p>
//       </div>
//     </div>
//     <div style={{ textAlign: 'center' }}> {/* Added wrapper for centering microphone */}
//         <div className="microphone">🎙️</div>
//     </div>
//   </section>
// );

// --- Events Component ---
const Events = ({ eventsRef }) => (
  <section className="section event-section" ref={eventsRef}>
    <h2 className="section-title">Future Preparations</h2>
    <div className="event-grid">
      <div className="event-card">
        <div className="event-date">WEEK 1 MEME COMPETITION</div>
        <h3>Meme Competion : Send us Now</h3>
        <p>Laugh away your stress before finals! Featuring local comedians and student performers. Free gifts for all winners!</p>
      </div>
       <div className="event-card">
        <div className="event-date">WEEK 1 MEME COMPETITION</div>
        <h3>Meme Competion : Send us Now</h3>
        <p>Laugh away your stress before finals! Featuring local comedians and student performers. Free gifts for all winners!</p>
      </div>
       <div className="event-card">
        <div className="event-date">WEEK 1 MEME COMPETITION</div>
        <h3>Meme Competion : Send us Now</h3>
        <p>Laugh away your stress before finals! Featuring local comedians and student performers. Free gifts for all winners!</p>
      </div>
      
    </div>
  </section>
);

// --- Join Component ---
const Join = () => (
  <section className="section join-section">
    <h2 className="section-title">Join The Laughter</h2>
    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
      <p style={{ fontSize: '1.3rem', lineHeight: 1.9, marginBottom: '35px' }}>
        Kömikos Comedy Club is your campus destination for stand-up, improv, and good vibes. 
        Whether you're a performer or just need a laugh, we've got you covered. Come for the comedy, stay for the community!
      </p>
      <button className="cta-button">JOIN US NOW</button>
    </div>
  </section>
);

// --- Footer Component ---
const Footer = () => (
  <footer>
    <div className="microphone" style={{ fontSize: '3rem', margin: '10px 0' }}>🎙️</div>
    <h3 style={{ color: '#ffb84d', marginBottom: '20px', fontSize: '2rem' }}>KÖMIKOS COMEDY CLUB</h3>
    <p style={{ fontSize: '1.1rem' }}>Student Union Building, Room 204</p>
    <p style={{ fontSize: '1.1rem', marginTop: '10px' }}>Email: info@komikos.nitt.edu</p>
    <div className="social-links">
      <a href="#">📱 Instagram</a>
      <a href="#">📘 Facebook</a>
      <a href="#">🐦 Twitter</a>
    </div>
    <p style={{ marginTop: '40px', color: '#888', fontSize: '0.9rem' }}>© 2025 Kömikos Comedy Club. All rights reserved.</p>
    <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '10px' }}>Making NIT Trichy laugh since 2025 🎭</p>
  </footer>
);

// --- Main App Component ---
export default function App() {
  const eventsSectionRef = useRef(null);

  // --- Event Handlers ---
  const scrollToEvents = () => {
    eventsSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // --- Lifecycle Hooks (JavaScript Logic) ---
  useEffect(() => {
    // 1. Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const spotlight = document.querySelector('.spotlight');
      const shapes = document.querySelectorAll('.shape');
      
      if (spotlight) {
        spotlight.style.transform = `translateX(-50%) translateY(${scrolled * 0.3}px)`;
      }

      shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);

    // 2. Button click animation
    const buttons = document.querySelectorAll('.cta-button');
    const handleButtonClick = (e) => {
      e.currentTarget.style.transform = 'scale(0.95)';
      setTimeout(() => {
        // Reset to hover state, not a fixed state
        e.currentTarget.style.transform = ''; 
      }, 100);
    };

    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    // 3. Intersection Observer for card animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInBounce 0.6s ease-out forwards';
          observer.unobserve(entry.target); // Optional: stop observing once animated
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.feature-card, .event-card');
    cards.forEach(card => {
      observer.observe(card);
    });

    // --- Cleanup function ---
    // This runs when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
      cards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <GlobalStyles />
      <Background />
      <main>
        <Hero onCtaClick={scrollToEvents} />
        {/* <Features /> */}
        <Events eventsRef={eventsSectionRef} />
        <Join />
      </main>
      <Footer />
    </>
  );
}