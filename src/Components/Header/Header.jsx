import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

import React from 'react'

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className='header complete'>
      <img
        src='/assets/logo.png'
        alt='logo'
        id='logo'
        onClick={() => {
          navigate('/')
        }}
      />

      <nav className='nav-header complete'>
        <ul className='ul-header complete'>
          <li className='li-header'>
            <NavLink
              to='/digimons'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              DIGIMONS
            </NavLink>
          </li>
          <li className='li-header'>
            <NavLink
              to='/curiosidades'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              CURIOSIDADES
            </NavLink>
          </li>
          <li className='li-header'>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              SOBRE NOSOTROS
            </NavLink>
          </li>
        </ul>
      </nav>
      <img
        src='/assets/menu.png'
        alt='toggle'
        id='toggle'
        onClick={() => {
          document.querySelector('.nav-header').classList.toggle('activa')
          document.querySelector('#toggle').classList.toggle('active')
        }}
      />
    </header>
  )
}

export default Header
