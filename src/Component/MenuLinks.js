import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Design.css';
import Hamburger from 'hamburger-react';

function MenuLinks() {

    const location = useLocation();
    const [isOpen,setOpen] = useState(false);


  return (
    <>
         
    {location.pathname == `/postpage` ? null: 
    (
        
      <div>
        <div className='HeadingMainSiren'>
          <div className=' Heading'>
            <div className='Heading1'>The</div>
            <div className='Heading2'>Siren</div>
          </div>

          <div className='Links'>
            <Link className='text' to='/' >Home</Link>
            <Link className='text' to='/bollywood' >Bollywood</Link>
            <Link className='text' to='/technology' >Technology</Link>
            <Link className='text' to='/hollywood' >Hollywood</Link>
            <Link className='text' to='/fitness' >Fitness</Link>
            <Link className='text' to='/food' >Food</Link>
          </div>
        </div>

        <div className="headerPostpageHome">
          <div className="HeadingPostpageHome">
            <div className="HeadingPostpage1">The</div>
            <div className="HeadingPostpage2">Siren</div>
          </div>
          <div className='hamburger'>
            <Hamburger size={40} color='black' toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        {
          isOpen ? 
          <div className='LinksDuo'>
          <Link className='text' to='/' >Home</Link>
          <Link className='text' to='/bollywood' >Bollywood</Link>
          <Link className='text' to='/technology' >Technology</Link>
          <Link className='text' to='/hollywood' >Hollywood</Link>
          <Link className='text' to='/fitness' >Fitness</Link>
          <Link className='text' to='/food' >Food</Link>
        </div>
        :null
        }

        < hr className='MenuUnderline'/>
      </div>
)}

    </>
  )
}

export default MenuLinks
