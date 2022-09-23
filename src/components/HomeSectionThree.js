import React from 'react'
import './home-section-three.css'

import iconplaceholder from '../images/IconPlaceholder1.png'
import iconplaceholder2 from '../images/IconPlaceholder2.png'
import iconplaceholder3 from '../images/IconPlaceholder3.png'

export default function HomeSectionThree() {
  return (
    <div className="second-section">
        <div >
        <h1 class="section-head-2">Create and sell your <br />NFTs</h1>

        <br />
        <br />
        
        <div className="cards">

            {/* card 01 */}
            <div class="card-design">
                <img  className="card-icon" src={iconplaceholder} alt="" />
                <h2 className="card-head">Set up your wallet</h2>
                <p className="card-para">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>

            </div>

            {/* card-02 */}
            <div class="card-design">
                <img  className="card-icon" src={iconplaceholder2} alt="" />
                <h2 className="card-head">Add your NFTs</h2>
                <p className="card-para">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>

            </div>

            {/* card-03 */}
            <div class="card-design">
                <img  className="card-icon" src={iconplaceholder3} alt="" />
                <h2 className="card-head">List them for sale</h2>
                <p className="card-para">Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>

            </div>

        </div>

        </div>
        
      
    </div>
  )
}
