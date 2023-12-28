//just type "rfce" and then press enter
import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"


function Header() {
    
  return (
    <div className='header'>
        <Link to="/">
            <img className='header__logo'src="./public/Amazon_logo.svg.png"alt='amazon-logo'/>
        </Link>
        

      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
            
      </div>
      <div className='header__nav'>
        <div className='header__option'>
            <span className='header__optionLineOne'>
                Hello Guest
            </span>
            <span className='header__optionLineTwo'>
                Sign in
            </span>
        </div>
        <div className='header__option'>
            <span className='header__optionLineOne'>
                Returns
            </span>
            <span className='header__optionLineTwo'>
                &Orders
            </span>
        </div> 
        <div className='header__option'>
            <span className='header__optionLineOne'>
                Your
            </span>
            <span className='header__optionLineTwo'>
                Prime
            </span>
        </div>
        <Link to="/checkout">
            <div className='header__optionBasket'>
               
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </Link>
       
      </div>

    </div>
  )
}

export default Header