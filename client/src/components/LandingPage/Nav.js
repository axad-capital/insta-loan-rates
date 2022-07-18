import React, { useState } from 'react'
// import useWindowDimensions from '../../hooks/useWIndowDimensions';

import './styles/nav.css'

const Nav = () => {

    const [showMenu, setShowMenu] = useState('none')

    // const { width } = useWindowDimensions();

    function toggleMenu() {
        if (showMenu === 'none') {
            setShowMenu('block')
        } else {
            setShowMenu('none')
        }
    }

    return (
        <div>
            <div className='landing-nav-container'>
                <div className='landing-nav-img-container'>
                    <img className='landing-nav-img' src="/images/instaloanlogo.png" alt="logo" />
                </div>
                <div className='landing-nav-items'>
                    <div className='landing-nav-num-container'>
                        <p>Call Us Today <a href="tel:8868852068">886 885 2068</a></p>
                    </div>
                    <ul>
                        <li>Cash Advance</li>
                        <li>Small Business</li>
                        <li>Financial Help</li>
                        <button className='request-btn'>REQUEST A LOAN</button>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div onClick={toggleMenu} className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className='mobil-nav'>
                <div className='hamburger-nav-items' style={{ display: showMenu, padding: '0 30px' }}>
                    <ul>
                        <li>Cash Advance</li>
                        <li>Small Business</li>
                        <li>Financial Help</li>
                        <li>Contact Us</li>
                        <button className='request-btn'>REQUEST A LOAN</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav