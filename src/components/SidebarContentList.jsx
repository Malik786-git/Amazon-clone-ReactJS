import React from 'react'

const SidebarContentList = ({items}) => {

 
    
  return (
   <li className='content-list py-2'>
    <a href="#"> {items} </a>
    <i className="fa mt-1 fa-chevron-right" aria-hidden="true"></i>
    </li>
  )
}

export default SidebarContentList
