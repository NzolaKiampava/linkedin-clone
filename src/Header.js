import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <h1>This is the header</h1>
        
        <header className='header__left'>
            <img src="" alt=""></img>
        </header>

        <header className='header__search'>
            {/* searchIcon */}
            <input type="text" />
            
        </header>

        <header className='header__right'>
    
        </header>
        
    </div>
  )
}

export default Header
