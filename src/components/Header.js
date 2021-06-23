import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className='center'>
      <Link to={"/"}>
        <img src={logo} alt='' />
      </Link>
    </header>
  )
}
export default Header


