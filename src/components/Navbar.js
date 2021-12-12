import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => setShowHamburger(!showHamburger)}
          >
            <FiAlignJustify />
          </button>
        </div>
        <div className={showHamburger ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShowHamburger(false)}
          >
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShowHamburger(false)}
          >
            Recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShowHamburger(false)}
          >
            Tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShowHamburger(false)}
          >
            About
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => setShowHamburger(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
