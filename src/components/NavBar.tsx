import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useLoggedIn } from "../providers/LoggedInProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import iconImage from '../images/user-icon.png';


const NavBar: React.FC = () => {
  const { isLoggedIn } = useLoggedIn();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <h1 className="h1-top">Per <span>Scholas</span></h1>
            <h1 className="h1-bottom">Tutoring</h1>
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a className= "hidden" href="/tutors">Tutors</a>
          </li>
          <li>
            <a className= "hidden" href="/sessions">Sessions</a>
          </li>
        </ul>
        <div className="icon" onClick={toggleDropdown}>
          {isLoggedIn.picture ? (
            <img className="profile-image" src={isLoggedIn.picture} alt="Profile" />
          ) : (
            <img className= "profile-image" src={iconImage} alt="Icon" />
          )}

          {dropdownOpen && (
            <div className="dropdown-menu" ref={dropdownRef}>
              <a href="/login">Login</a>
              <a href="/signup">Sign Up</a>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
