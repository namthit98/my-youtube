import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  return (
    <div className="ui container">
      <div className="ui menu">
        <NavLink exact to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/library" className="item">
          My Library
        </NavLink>
        <div className="right menu">
          <div className="item">
            Copyright &copy; by &nbsp;<strong>NamHandsome</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
