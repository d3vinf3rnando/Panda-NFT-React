import React from 'react'
import './5.homeSection.css'

import Artimage1 from '../images/Image Placeholder.png'
import Artimage2 from '../images/artist2.png'
import Artimage3 from '../images/artist3.png'
import Artimage4 from '../images/artist4.png'

import Profile1 from '../images/profpic1.png'
import Profile2 from '../images/profile2.png'
import Profile3 from '../images/profile3.png'
import Profile4 from '../images/profile4.png'

import eth from '../images/eth1.png'


export default function fiveHomeSection() {
  return (
    <div className='home-section-5'>

      <div>
        <h1 className="section-tittle">Featured Artist <button class="view-button">View More</button></h1>
      </div>

      <div className="artists" >
        <div className="artist-1">
          <img className="art-image-1" src={Artimage1} alt="" />
          <img className="profile" src={Profile1} alt="" />
          <h2 className="crypto-head">CryptoPunks</h2>
          <p className="eth-value">818.8k</p>
          <img className="eth-img" src={eth} alt="" />

          
        </div>

        <div className="artist-1">
        <img className="art-image-1" src={Artimage2} alt="" />
        <img className="profile" src={Profile2} alt="" />
        <h2 className="crypto-head">Doodles</h2>
        <p className="eth-value">74.9k</p>
        <img className="eth-img" src={eth} alt="" />

        </div>

        <div className="artist-1">
        <img className="art-image-1" src={Artimage3} alt="" />
        <img className="profile" src={Profile3} alt="" />
        <h2 className="crypto-head">Bored Ape Yacht</h2>
        <p className="eth-value">378.8k</p>
        <img className="eth-img" src={eth} alt="" />

        </div>

        <div className="artist-1">
        <img className="art-image-1" src={Artimage4} alt="" />
        <img className="profile" src={Profile4} alt="" />
        <h2 className="crypto-head">Capsule House</h2>
        <p className="eth-value">19.3k</p>
        <img className="eth-img" src={eth} alt="" />

        </div>

        
      </div>
      
    </div>
  )
}
