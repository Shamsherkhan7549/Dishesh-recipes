import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { context } from '../context/ContextApi'
import Favourite from './Favourite'

const Navbar = () => {
  const {showFavourite, setShowFavourite, favourite} = useContext(context);

  const handlingFavourite = () => {
    setShowFavourite(!showFavourite)
  }




  return (
    <>
<nav className="navbar navbar-expand-sm sticky-top bg-body-tertiary">
  <div className="container-fluid">
     <NavLink className='navbar-brand'>
        <p onClick={handlingFavourite} style={{cursor:'pointer', fontWeight:'700'}}> <span className='text-danger'>Re</span><span className='text-primary'>cip</span><span className='text-success'>es</span></p>
      </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to={'/'} className='nav-link'>
              <p>Home</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/about'} className='nav-link'>
              <p>About</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/contact'} className='nav-link'>
              <p>Contact</p>
          </NavLink>
        </li>
       

      </ul>
    </div>
  </div>
</nav>
    {showFavourite && <Favourite/>}
</>
  )
}

export default Navbar