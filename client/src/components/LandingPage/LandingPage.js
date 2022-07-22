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

        <br />
        <br />

        <div className='bca-container'>
          <div className='bca-info'>
            <div>
              <h1>Business Cash Advance for Companies</h1>
              <p>Insta Loan offers flexible programs to small businesses all across the United States. From merchant cash advances to business lines of credit, Insta Loan can find the option that's right for you and your business. A small business fund can really get your business going, especially if you're in a competitive marketplace. Having the capital you need to advertise or market can be the difference between doing just good or doing great. Let Insta Loan show you the way and secure capital for your small business today.</p>
              <br />
              <button className='apply-now-btn'>APPLY NOW</button>
            </div>
          </div>
        </div>

        <div className='blc-container'>
          <div>
            <h1>Business Lines of Credit</h1>
            <p>A credit line can be a crucial asset to any small business, Small businesses all over can benefit from a credit line up to $3,000,000 with flexible repayment terms and competitive rates. A credit line can be the answer to your funding dreams and is a popular choice among small businesses who choose this option rather than a cash advance.</p>
          </div>
          <div>
            <h1>Small Business Cash Advance</h1>
            <p>Business cash advances give a small business the ability to obtain capital without the requirement of collateral. Business cash advances are becoming more popular among small businesses due to their flexible terms and interest rates. They differ from a standard loan in part by being less stringent on collateral and credit score but more heavily focused on a small businesses monthly credit card sales and revenue.</p>
          </div>
        </div>

        <div className='financing-solutions-container'>
          <h1 className="financing-title">Financing Solutions for your Small Business</h1>
          <div className='financing-icons'>
            <div>
              <img src="/images/bli.png" alt="icon" />
              <p>Business Loans</p>
            </div>
            <div>
              <img src="/images/Equipment.png" alt="icon" />
              <p>Equipment Financing</p>
            </div>
            <div>
              <img src="/images/InvoiceFactoring.png" alt="icon" />
              <p>Invoice Factoring</p>
            </div>
            <div>
              <img src="/images/LineCredit.png" alt="icon" />
              <p>Line of Credit</p>
            </div>
            <div>
              <img src="/images/PurchaseOrderIcon.png" alt="icon" />
              <p>Purchase Order Financing</p>
            </div>
            <div>
              <img src="/images/RevenueBasedIcon.png" alt="icon" />
              <p>Revenue Based Financing</p>
            </div>
          </div>
        </div>

        <div className="lp-footer-container">
          <div>
            <h3>About Us</h3>
            <br />
            <div>
              <ul className='lp-footer-links'>
                <li><a href="/lp1">Media Center</a></li>
                <li><a href="/lp1">Team</a></li>
                <li><a href="/lp1">Careers</a></li>
                <li><a href="/lp1">Events</a></li>
                <li><a href="/lp1">Success Stories</a></li>
                <li><a href="/lp1">The apitus Difference</a></li>
                <li><a href="/lp1">Developer Documentations</a></li>
                <li><a href="/lp1">Blog</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Contact Us</h3>
            <br />
            <div>
              <ul className='lp-footer-links'>
                <li><a href="tel:8668852058">866 885 2058</a></li>
                <li><a href="mailto:email@example.com">email@example.com</a></li>
              </ul>
            </div>
          </div>

          <div>
            <h3>Sign up for our Newsletter</h3>
            <br />
            <input className='newsletter-input' type="email" name="email" id="email-newsletter" placeholder='Enter Your Email..' />
            <br />
            <br />
            <button className='newsletter-btn'>SUBSCRIBE</button>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}

export default LandingPage