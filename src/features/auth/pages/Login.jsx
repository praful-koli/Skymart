import { useState } from "react";
import "../style/Login.scss";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../hook/useAuth";
import { toast } from "react-toastify";
const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="16"
    height="16"
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

export default function Login() {
  console.log("login page redender...");
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(null);
  const { setLoggedInUser, registers } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
  

    const user = registers.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (!user) {
      toast.warning("User Not Found! Check credentials");
      return;
    }

    setLoggedInUser(user); // use the actual matched user
    localStorage.setItem("log user", JSON.stringify(user));
    toast.success("Login successful");
    reset();
    navigate("/home");
  };

  return (
    <div className="login-page">
      {/* ── Left Panel ── */}

      <div className="left-panel">
        <div className="logo">
          <div className="logo__icon">
            <BoltIcon />
          </div>
          <span className="logo__text">
            Sky<span className="logo__accent">Mart</span>
          </span>
        </div>

        <div className="hero">
          <p className="hero__eyebrow">WELCOME BACK</p>
          <h1 className="hero__heading">
            Shop the future.
            <br />
            <span className="hero__accent">Today.</span>
          </h1>
          <p className="hero__sub">
            Thousands of products, lightning-fast delivery, and
            <br />
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
            <span className="stats__value">
              4.9<span className="stats__star">★</span>
            </span>
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

          <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div
              className={`field ${focused === "email" ? "field--focused" : ""}`}
            >
              <span className="field__icon">
                <MailIcon />
              </span>
              <input
                {...register("email", { required: "Email Required" })}
                type="email"
                className="field__input"
                placeholder="Email address"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-red-400">{errors.email.message}</p>
            )}
            {/* Password */}
            <div
              className={`field ${focused === "password" ? "field--focused" : ""}`}
            >
              <span className="field__icon">
                <LockIcon />
              </span>
              <input
                {...register("password", {
                  required: "Password required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                })}
                type={showPass ? "text" : "password"}
                className="field__input"
                placeholder="Password"
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
            {errors.password && (
              <p className="text-xs text-red-400">{errors.password.message}</p>
            )}
            <button type="submit" className="signin-btn">
              Sign in <span className="signin-btn__arrow">→</span>
            </button>
          </form>

          <p className="signin-card__footer">
            Don't have an account?{" "}
            <Link to={"/register"}>
              {" "}
              <span href="#" className="signin-card__link">
                Create one
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
