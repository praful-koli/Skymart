import { useState, useEffect } from "react";
import { Link, useNavigate,NavLink } from "react-router-dom";
import "../styles/Navbar.scss";

import {useCart} from '../../product/hook/useCart.js'
import { useAuth } from "../../auth/hook/useAuth.js";
import { toast } from "react-toastify";
const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L4.09 12.97H11L10 22L20.91 11.03H14L13 2Z" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const LogoutIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function Navbar() {
  const {setIsOpen,items} = useCart()
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
 const {LogOut,loggedInUser ,registers} = useAuth()


  const LogOutHandler = () => {
    LogOut()
    navigate('/')
    toast.success('LogOut Successfull')
  }
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 let currentUser  = registers.find((user)=> {
     return user.email === loggedInUser.email && user.password === loggedInUser.password
  })
  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
         <Link to={'/home'}>
        <div className="navbar-logo">
         
            <div className="navbar-logo-icon">
              <BoltIcon />
            </div>
         
          <span className="navbar-logo-text">
            Sky<span className="navbar-logo-accent">Mart</span>
          </span>
        </div>
         </Link>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li>
            <NavLink
              to="/home"
              end
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/products"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home/about"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "navbar-link-active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="navbar-actions">
          <div className="navbar-user">
            <div className="navbar-user-avatar">{currentUser.name.slice(0,1)}</div>
            <span className="navbar-user-name">{currentUser.name}</span>
          </div>
          <button onClick={() => setIsOpen(true)} className="navbar-btn-icon cart relative" aria-label="Cart">
            <CartIcon />
            <p className={items.length == 0 ? " " : "w-4 h-4  rounded-3xl bg-[#e8e838] text-[11px] text-black flex items-center justify-center absolute top-[-4px] right-[-4px]"}>{items.length  == 0? '' :items.length }</p>
          </button>
          <button
            onClick={() => LogOutHandler()}
            className="navbar-btn-icon logout"
            aria-label="Logout"
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
