import React from 'react'
import './homeComp.css'
import FormComp from '../FormComp/FormComp'
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

const HomeComp = () => {

    const location = useLocation();

    return (
        <div>

            <div className="nav-container">
                <div className="logo-container">
                    <img src='/images/instaloanlogo.png' alt="Logo" className="logo" />
                </div>
                <div className="navbar-number-container">
                    {location.pathname.split('/')[1] === 'goog' ? <a href='tel:18774032421' className="nav-number">1(877) 403-2421</a> : location.pathname.split('/')[1] === 'fb' ? <a href='tel:18774032414' className="nav-number">1(877) 403-2414</a> : <a href='tel:8668852068' className="nav-number">(866) 885-2068</a>}

                </div>
            </div>

            <div className='header-container'>
                <div className="header">
                    <div className="header-title-container">
                        <h1 className="header-title">Simple, Fast, Safe, Business Financing</h1>
                        <h3 className="sub-title">InstaLoans provides strategic working capital, Approvals in as little as 24 hours</h3>
                    </div>
                    <FormComp />
                </div>
            </div>

            <div className="business-cash">
                <h1 className="business-cash-title">Business Cash Advance Companies</h1>
                <br />
                <p className="business-text">Insta Loan offers flexible programs to small businesses all across the United States. From merchant cash advances to business lines of credit, Insta Loan can find the option that's right for you and your business. A small business fund can really get your business going, especially if your in a competitive marketplace. Having the capital you need to advertise or market can be the difference between doing just good or doing great. Let Insta Loan show you the way and secure capital for your small business today.</p>
            </div>
            <div className="info-container">
                <div className="business-lines-container">
                    <h2 className="business-lines-title">Business Lines of Credit</h2>
                    <br />
                    <p className="business-text">A credit line can be a crucial asset to any small business. Small businesses all over can benefit from a credit line up to $3,000,000 with flexible repayment terms and competitive rates. A credit line can be the answer to your funding dreams and is a popular choice among small businesses who choose this option rather than a cash advance.</p>
                </div>
                <div className="small-business-container">
                    <h2 className="small-business-title">Small Business Cash Advance</h2>
                    <br />
                    <p className="business-text">Business cash advances give a small business the ability to obtain capital without the requirement of collateral. Business cash advances are becoming more popular among small businesses due to their flexible terms and interest rates. They differ from a standard loan in part by being less stringent on collateral and credit score but more heavily focused on a small businesses monthly credit card sales and revenue.</p>
                </div>
            </div>
            <br />
            <br />

            <div className="contact">
                <h1 className="contact-title">Want to know how we can help you business?</h1>
                <h1 className="contact-title">Contact us for more Information</h1>
                <br />
                {location.pathname.split('/')[1] === 'goog' ? <h1 className="contact-title"><a  href='tel:18774032421' className='contact-number'>1(877) 403-2421</a></h1> : location.pathname.split('/')[1] === 'fb' ? <h1 className="contact-title"><a href='tel:18774032414' className='contact-number'>1(877) 403-2414</a></h1> : <h1 className="contact-title"><a href='tel:8668852068' className='contact-number'>(866) 885-2068</a></h1>}
            </div>

            <Footer />
        </div>
    )
}

export default HomeComp