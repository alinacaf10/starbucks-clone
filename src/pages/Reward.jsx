import React from 'react'
import "../styles/pages/rewards.scss"
import Header from '../components/header'
const Reward = () => {
  return (
    <div>
      <Header/>
      <div className='starbucks-rewards'>
        <div className="container">
        <h2>STARBUCKS® REWARDS</h2>
        </div>
      </div>
      <div className="image">
        <img src="https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png" alt="" />
      </div>
    </div>
  )
}

export default Reward
