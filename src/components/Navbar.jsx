import React from 'react'
import logo from '../assets/img/llogo.png';
import usa from '../assets/img/usa.png'
const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg  navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} alt="" width='100px' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <li className="nav-item">
          <a className="nav-link location-nav" href="#">
            
          <i className="fa fa-map-marker" aria-hidden="true"></i>
           <span> Pakistan</span>  
            </a>
     </li>
    <form className="d-flex w-100" role="search">
        <select name="" id="">
            <option value="none" selected disabled hidden>All</option>
            <option value="">All Department</option>
            <option value="">Arts {'&'} Craft</option>
            <option value="">Automative</option>
            <option value="">Book's</option>
            <option value="">Movies</option>
            <option value="">Hardware and Tools</option>
            <option value="">Technologies</option>
            <option value="">Graphic Card</option>
        </select>
        <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
        <span className='search'><i className="fa fa-search" aria-hidden="true"></i></span>
      </form>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        
            <img src={usa} alt="" width='40px' />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Chines</a></li>
            <li><a className="dropdown-item" href="#">Urdu</a></li>
            <li><a className="dropdown-item" href="#">Eng - UK</a></li>
            <li><a className="dropdown-item" href="#">Hindi</a></li>
            <li><a className="dropdown-item" href="#">Russian</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle account-nav" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Account {'&'} Lists
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sign in</a></li>
            <li><a className="dropdown-item" href="#">Already have account</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Premium Account</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link order-nav" href="#">Orders</a>
        </li>
         <li className="nav-item cart-nav">
          <div className="itemCounter">0</div>
          <a className="nav-link" href="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
        </li>
      
      </ul>
 
      
    </div>
  </div>
</nav> 
    </>
  )
}


export default Navbar;
