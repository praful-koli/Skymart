import { useState } from "react";
import "../style/Login.scss";
import { Link } from "react-router";

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signing in...");
  };

  return (
    <div className="login-page">
      {/* ── Left Panel ── */}


      <div className="left-panel">

        <div className="logo">
          <div className="logo__icon"><BoltIcon /></div>
          <span className="logo__text">Sky<span className="logo__accent">Mart</span></span>
        </div>

        <div className="hero">
          <p className="hero__eyebrow">WELCOME BACK</p>
          <h1 className="hero__heading">
            Shop the future.<br />
            <span className="hero__accent">Today.</span>
          </h1>
          <p className="hero__sub">
            Thousands of products, lightning-fast delivery, and<br />
            prices that make your wallet happy.
          </p>
        </div>

        <div className="stats">
          <div className="stats__card">
            <span className="stats__value">20K+</span>
            <span className="stats__label">Products</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">50K+</span>
            <span className="stats__label">Users</span>
          </div>
          <div className="stats__card">
            <span className="stats__value">4.9<span className="stats__star">★</span></span>
            <span className="stats__label">Rating</span>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="divider" />

      {/* ── Right Panel ── */}
      <div className="right-panel">
        
        <div className="signin-card">
          <h2 className="signin-card__title">Sign in</h2>
          <p className="signin-card__sub">Enter your credentials to continue</p>

          <form className="signin-form" onSubmit={handleSubmit}>
            {/* Email */}
            <div className={`field ${focused === "email" ? "field--focused" : ""}`}>
              <span className="field__icon"><MailIcon /></span>
              <input
                type="email"
                className="field__input"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>

            {/* Password */}
            <div className={`field ${focused === "password" ? "field--focused" : ""}`}>
              <span className="field__icon"><LockIcon /></span>
              <input
                type={showPass ? "text" : "password"}
                className="field__input"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused(null)}
              />
              <button
                type="button"
                className="field__eye"
                onClick={() => setShowPass(v => !v)}
                tabIndex={-1}
              >
                {showPass ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>

            <button type="submit" className="signin-btn">
              Sign in <span className="signin-btn__arrow">→</span>
            </button>
          </form>

          <p className="signin-card__footer">
            Don't have an account?{" "}
        <Link to={'/register'}>  <span href="#" className="signin-card__link">Create one</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
}