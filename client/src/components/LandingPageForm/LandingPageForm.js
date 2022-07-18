import React from 'react'
import './landingPageForm.css'

const LandingPageForm = () => {
  return (
    <div>
        <div className='landing-page-form-container'>
            <h1>See if your business qualifies now</h1>
            <br />
            <div className='landing-page-form'>
                <input type="text" name="first-name" id="firstName" placeholder='FIRST NAME' />
                <br />
                <br />
                <input type="text" name="last-name" id="last-name" placeholder='LAST NAME' />
                <br />
                <br />
                <input type="email" name="email" id="email" placeholder='EMAIL' />
                <br />
                <br />
                <input type="text" name="company" id="company" placeholder='COMPANY' />
                <br />
                <br />
                <input type="text" name="job" id="job" placeholder='JOB TITLE' />
                <br />
                <br />
                <input type="number" name="amount" id="amount" placeholder='AMOUNT YOU ARE LOOKING FOR' />
                <br />
                <br />
                <input type="number" name="phone" id="phone" placeholder='PHONE' />
                <br />
                <br />
                <br />
                <button className='landing-page-form-btn'>APPLY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default LandingPageForm