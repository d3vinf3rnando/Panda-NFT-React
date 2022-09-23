import React from 'react'
import './HomeSection4.css'

import nftImage from '../images/IMG1.png'
import nftImage2 from '../images/IMG2.png'
import nftImage3 from '../images/IMG3.png'


export default function HomeSection4() {
  return (
    <div className="home-section-4">
        <div>
        <h1 className="section-4-head">Live Auctions <button class="view-button">View More</button></h1> 

        <br />
        <br />

        </div>

        <div className="nfts">
            <div class="nft-one">
                <img className="nft-one-image" src={nftImage} alt="" />
            </div>

            <div class="nft-one">
            <img className="nft-one-image" src={nftImage2} alt="" />
            </div>

            <div class="nft-one">
            <img className="nft-one-image" src={nftImage3} alt="" />

            </div>
        </div>
        
        
    </div>
  )
}
