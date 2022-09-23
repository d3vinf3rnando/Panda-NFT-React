import React from 'react'
import './home-section-one.css'

import cardImage from '../images/CARD.png'
import sidecard from '../images/CARDside.png'


export default function HomeSectionOne() {
  return (
    <div className="main-div ">
      <h1 className="head">Discover a New Era of <br></br> Crypto Currency </h1>
      <p className="head-para">Panda NFT is the primier marketplace for NFT, 
        which are digital items you <br></br>can truly own. Digital items have existed for a long time, 
        but never like<br></br> this.</p>

      <button className="button">Get Started</button>

      
      <img class="card-home" src={cardImage} />
      <img class="side-card" src={sidecard} />
      
      


    </div>
  )
}
