import React from 'react'
import './landingPageForm.css'

const LandingPageForm = () => {

  function handleSubmit() {

    let formData = {
      first_name: document.getElementById('first-name').value,
      last_name: document.getElementById('last-name').value,
      email: document.getElementById('email').value,
      company: document.getElementById('company').value,
      job: document.getElementById('job').value,
      loan_amount: document.getElementById('amount').value,
      phone: document.getElementById('phone').value,
      time_stamp: Date(),
      trust_form_cert_url: document.getElementById('xxTrustedFormCertUrl_0').value
    }

    console.log(formData)

    // sending data to pipedream
    fetch('https://enoqc130lxtzlcm.m.pipedream.net/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    window.location.href = '/thanks-lp1'
  }

  return (
    <div>
      <div className='landing-page-form-container'>
        <h1>See if your business qualifies now</h1>
        <br />
        <form className='landing-page-form'>
          <input type="text" name="first-name" id="first-name" placeholder='FIRST NAME' />
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
        </form>
        <button onClick={handleSubmit} className='landing-page-form-btn'>APPLY NOW</button>
      </div>
    </div>
  )
}

export default LandingPageForm