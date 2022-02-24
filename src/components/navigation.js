import React, { useState } from 'react';
import { Link } from 'gatsby';




function NavigationClicked({ toggler }) {

    const [navVisible, setNavVisible] = useState(false);

    const toggleNav = () => !navVisible ? setNavVisible(true) : setNavVisible(false)

    return ( 
      <main className='nav-wrapper-clicked'>
        <header className={navVisible ? 'page-header blur-nv-bg' : 'page-header'}>
        <h1>Propolis</h1>
       

          <div className='nav-icons' 
            onClick={() => toggleNav()}>
            <span className='nav-exit-icon' onClick={toggler}>+</span>
          </div>

          
        </header>

        <div className='nav-list'>
            <ul>
              <Link to='/'><li onClick={toggler}>Home</li></Link>
              <Link to='/shop'><li>Shop</li></Link>
              <Link to='/videos'><li>Videos</li></Link>
              <Link to='/listen'><li>Listen</li></Link>
              <Link to='/show-dates'><li>Show Dates</li></Link>
              <Link to='/mailing-list'><li>Mailing List</li></Link>
              <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </div>
      </main>
    )
}

export default NavigationClicked;