import React from 'react'
import './navbar.css'
import mainlogo from '../images/mainlogo.png'

export default function NavBar() {
  return (
    <div>
      <div className="NavBar-Main">
        <div>
            <header>
                <h1 class="main-logo"><img className="logo" src={mainlogo} alt="logo" /> </h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Discover</a></li>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                <button class="connect-wallet">Connect Wallet</button>

                
            </header>
        </div>
      </div>
    </div>
  )
}
