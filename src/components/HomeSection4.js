import React from 'react'
import './HomeSection4.css'

import nftImage from '../images/IMG1.png'
import nftImage2 from '../images/IMG2.png'
import nftImage3 from '../images/IMG3.png'

import crImage1 from '../images/Background.png'
import crImage2 from '../images/crimage2.png'
import crImage3 from '../images/crimage3.png'

export default function HomeSection4() {
  return (
    <div className="home-section-4">
        <div>
        <h1 className="section-4-head">Live Auctionss <button class="view-button">View More</button></h1> 

        <br />
        <br />

        </div>

        <div className="nfts">
            <div class="nft-one">
                <img className="nft-one-image" src={nftImage} alt="" />
                <p className="nft-name-head">Hamlet Contemplates</p>
                <p className="nft-type">BSC</p>
                

                <img className="crimage" src={crImage1} alt="" />
                <p className="creator">Creator</p>
                <p className="bid">Currunt Bid</p>
                <p className="creatorName">SalvadorDali</p>
                <p className="eth">4.89 ETH</p>
            </div>

            <div class="nft-one">
              <img className="nft-one-image" src={nftImage2} alt="" />
              <h1 className="nft-name-head">Hamlet Contemplates</h1>
              <p className="nft-type">BSC</p>

              <img className="crimage" src={crImage2} alt="" />

              <p className="creator">Creator</p>
              <p className="bid">Currunt Bid</p>
              <p className="creatorName">GlamorNFT</p>
              <p className="eth">5.12 ETH</p>


            </div>

            <div class="nft-one">
              <img className="nft-one-image" src={nftImage3} alt="" />
              <p className="nft-name-head">Hamlet Contemplates</p>
              <p className="nft-type">BSC</p>

              <img className="crimage" src={crImage3} alt="" />

              <p className="creator">Creator</p>
              <p className="bid">Currunt Bidd</p>
              <p className="creatorName">APESnft</p>
              <p className="eth">6.70 ETH</p>



            </div>
        </div>
        
        
    </div>
  )
}
