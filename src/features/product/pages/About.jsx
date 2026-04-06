import "../styles/About.scss";
import {useNavigate} from 'react-router'
// ── Icons ──────────────────────────────────────────────────
const BoltIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);
const BoxIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const TruckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 5v3h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const DeliveryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" rx="1"/>
    <path d="M16 8h4l3 5v3h-7V8z"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const StarSmIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────
const STATS = [
  { icon: <BoxIcon />,   value: "20K+", label: "Products" },
  { icon: <UsersIcon />, value: "50K+", label: "Happy Customers" },
  { icon: <StarIcon />,  value: "4.9",  label: "Avg. Rating" },
  { icon: <TruckIcon />, value: "99%",  label: "On-time Delivery" },
];

const VALUES = [
  { icon: <ShieldIcon />,  title: "Trust",     desc: "Every product is verified for quality and authenticity before listing.", color: "value-icon-purple" },
  { icon: <DeliveryIcon />,title: "Speed",     desc: "We obsess over delivery times so your orders arrive when promised.",    color: "value-icon-green" },
  { icon: <HeartIcon />,   title: "Community", desc: "Built around real customer feedback, not just business metrics.",       color: "value-icon-red" },
  { icon: <StarSmIcon />,  title: "Quality",   desc: "We curate the best — no filler, no junk, just great products.",        color: "value-icon-yellow" },
];

const TEAM = [
  { name: "Aryan Shah",    role: "Founder & CEO",   initial: "A", color: "team-avatar-green"  },
  { name: "Priya Mehta",   role: "Head of Product",  initial: "P", color: "team-avatar-blue"   },
  { name: "Rohan Verma",   role: "Lead Engineer",    initial: "R", color: "team-avatar-purple" },
  { name: "Sneha Kapoor",  role: "Design Director",  initial: "S", color: "team-avatar-red"    },
];

// ── Component ──────────────────────────────────────────────
export default function About() {
    const navigate = useNavigate()
  return (
    <div className="about-page">
      <div className="about-container">

        {/* ── Hero ── */}
        <section className="about-hero">
          <div className="about-hero-icon">
            <BoltIcon />
          </div>
          <h1 className="about-hero-title">
            About <span className="about-hero-accent">SkyMart</span>
          </h1>
          <p className="about-hero-desc">
            SkyMart is a next-generation e-commerce platform built to make online<br />
            shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>

        {/* ── Stats ── */}
        <div className="about-stats">
          {STATS.map((s) => (
            <div className="about-stat-card" key={s.label}>
              <span className="about-stat-icon">{s.icon}</span>
              <span className="about-stat-value">{s.value}</span>
              <span className="about-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── Our Story ── */}
        <div className="about-story">
          <h2 className="about-story-title">Our Story</h2>
          <p className="about-story-text">
            SkyMart started in 2022 as a small side project — two engineers tired of bloated,
            slow e-commerce experiences. We asked ourselves: what if shopping online was actually{" "}
            <em>enjoyable</em>?
          </p>
          <p className="about-story-text">
            Three years later, SkyMart serves over 50,000 customers across the country. We stock
            electronics, fashion, jewelry, and everyday essentials — all at prices that don't require
            a second mortgage.
          </p>
          <p className="about-story-text">
            We're still the same team at heart: obsessed with speed, transparency, and making you
            feel good about every purchase you make here.
          </p>
        </div>

        {/* ── Values ── */}
        <section className="about-values-section">
          <h2 className="about-section-title">What We Stand For</h2>
          <div className="about-values-grid">
            {VALUES.map((v) => (
              <div className="about-value-card" key={v.title}>
                <div className={`about-value-icon ${v.color}`}>{v.icon}</div>
                <div className="about-value-text">
                  <p className="about-value-title">{v.title}</p>
                  <p className="about-value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="about-team-section">
          <h2 className="about-section-title">Meet the Team</h2>
          <div className="about-team-grid">
            {TEAM.map((m) => (
              <div className="about-team-card" key={m.name}>
                <div className={`about-team-avatar ${m.color}`}>{m.initial}</div>
                <p className="about-team-name">{m.name}</p>
                <p className="about-team-role">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="about-cta">
          <h2 className="about-cta-title">Ready to shop?</h2>
          <p className="about-cta-desc">Explore thousands of products at unbeatable prices.</p>
          <button 
          onClick={()=> navigate('/home/products')} className="about-cta-btn">
            Browse Products <ArrowIcon />
          </button>
        </div>

      </div>
    </div>
  );
}