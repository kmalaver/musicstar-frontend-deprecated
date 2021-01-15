import React from 'react'
import '../styles/components/Navbar.css'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

const Navbar = ({ type }) => {
  return (
    <nav className={`navbar navbar__${type}`}>
      <ul>
        <Link to={routes.songs} className='Link'>canciones</Link>
        <Link to={routes.lessons} className='Link'>lecciones</Link>
        <Link to={routes.radio} className='Link'>radio</Link>
      </ul>
    </nav>
  )
}

export default Navbar
