import React from 'react'
import './styles/landingPage.css'
import Nav from './Nav'
import LandingPageForm from '../LandingPageForm/LandingPageForm'

const LandingPage = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Nav />
      <div className='lp-header-bg-container'>

        <div className='lp-header-title-container'>
          <div>
            <h1>Simple, Safe & Fast Business Financing</h1>
            <p>For your growing small business</p>
          </div>
          <div>
            <LandingPageForm />
          </div>
        </div>

        <div className='apply-container'>
          <img src="/images/apply.png" alt="apply" />
          <p>Apply today to get financing for your small business</p>
        </div>

      </div>
    </div>
  )
}

export default LandingPage