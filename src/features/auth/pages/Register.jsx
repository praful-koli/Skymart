import { useState } from "react";
import "../style/Register.scss";
import { Link } from "react-router";
// import { useForm } from "react-hook-form";

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const LockIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

export default function Register() {
  
  // const {
  //   register,
  //   reset,
  //   // handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  // });

  // const onSubmit = (data) => {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(null);

  const set = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
  };

  return (
    <div className="register-page">
      {/* Logo */}
      <div className="logo">
        <div className="logo__icon">
          <BoltIcon />
        </div>
        <span className="logo__text">
          Sky<span className="logo__accent">Mart</span>
        </span>
      </div>

      {/* Card */}
      <div className="register-card">
        <h2 className="register-card__title">Create account</h2>
        <p className="register-card__sub">Join SkyMart and start shopping</p>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div
            className={`field ${focused === "name" ? "field--focused" : ""}`}
          >
            <span className="field__icon">
              <UserIcon />
            </span>
            <input
              type="text"
              className="field__input"
              placeholder="Full name"
              onChange={set("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
          </div>

          {/* Email */}
          <div
            className={`field ${focused === "email" ? "field--focused" : ""}`}
          >
            <span className="field__icon">
              <MailIcon />
            </span>
            <input
              type="email"
              className="field__input"
              placeholder="Email address"
              value={form.email}
              onChange={set("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>

          {/* Password */}
          <div
            className={`field ${focused === "password" ? "field--focused" : ""}`}
          >
            <span className="field__icon">
              <LockIcon />
            </span>
            <input
              type={showPass ? "text" : "password"}
              className="field__input"
              placeholder="Password (min 6 chars)"
              value={form.password}
              onChange={set("password")}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
            />
            <button
              type="button"
              className="field__eye"
              onClick={() => setShowPass((v) => !v)}
              tabIndex={-1}
            >
              {showPass ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>

          {/* Confirm Password */}
          <div
            className={`field ${focused === "confirm" ? "field--focused" : ""}`}
          >
            <span className="field__icon">
              <LockIcon />
            </span>
            <input
              type="password"
              className="field__input"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={set("confirm")}
              onFocus={() => setFocused("confirm")}
              onBlur={() => setFocused(null)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Account <span className="submit-btn__arrow">→</span>
          </button>
        </form>

        <p className="register-card__footer">
          Already have an account?{" "}
          <Link to={"/"}>
            {" "}
            <a href="#" className="register-card__link">
              Sign in
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}
