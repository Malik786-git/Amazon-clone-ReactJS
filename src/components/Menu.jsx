import React from 'react'
import { GlobalProvider } from '../context/context';
const Menu = () => {
  const {openSidebar} = GlobalProvider();

  return (
    <div className='container-fluid menu'>
       <ul className='d-flex ps-1'>
        <li className='nav-link me-3 py-2 abc'
            onClick={openSidebar}
        >

          <span>
        <i className="fa fa-bars" aria-hidden="true"></i>  
            All
          </span>  
        </li>
        <li className='nav-link mx-md-3 py-2'>Today's Deals</li>
        <li className='nav-link mx-md-3 py-2'>Customer Service</li>
        <li className='nav-link mx-4 py-2'>Registry</li>
        <li className='nav-link mx-md-3 py-2'>Gift Cards</li>
        <li className='nav-link mx-md-3 py-2'>Sell</li>
       </ul>
    </div>
  )
}

export default Menu;
