import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      Header
      <ul>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <Link to="regicter">Register</Link>
      </ul>
    </div>
  )
}

export default Header
