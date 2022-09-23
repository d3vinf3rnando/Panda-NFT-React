import React from 'react'

import HomeSectionOne from '../components/HomeSectionOne'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeSectionThree from '../components/HomeSectionThree'
import HomeSectionFour from '../components/HomeSection4'
import HomeSectionFive from '../components/fiveHomeSection'
import HomeSectionSix from '../components/sixHomeSection'

import NavBar from '../components/NavBar'


export default function Home() {
  return (
    <div>
      <NavBar/>
      <HomeSectionOne/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <HomeSectionFive/>
      <HomeSectionSix/>
    </div>
  )
}
