import React, {useState} from 'react'
import './Header.css'

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className='header'>      
      <nav className="navigation">
        <a href="/" className="brand-name">
          Onakanam
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
          {/* hamburger svg code... */}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">Games</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header
