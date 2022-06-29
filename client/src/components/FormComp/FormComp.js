import React, { useState } from 'react'
import './formComp.css'
import { useLocation } from 'react-router-dom';

const FormComp = () => {

    const location = useLocation();

    const [successful, setSuccessful] = useState('')
    const [error, setError] = useState('')

    function handleFormSubmit() {
        console.log('clicked');
        let formData = {
            firstName: document.getElementById('first').value,
            lastName: document.getElementById('last').value,
            email: document.getElementById('email').value,
            companyName: document.getElementById('company').value,
            jobTitle: document.getElementById('title').value,
            amount: document.getElementById('amount').value,
            phone: document.getElementById('phone').value
        }

        if (formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.companyName === '' || formData.jobTitle === '' || formData.amount === '' || isNaN(formData.amount) || formData.phone === '' || isNaN(formData.phone)) {
            setError('Missing fields')
            return
        }

        setError('')

        fetch('https://eooiefz2j7vx4le.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => {
                setSuccessful("Form has been sent!")
                return res.json()
            })
            .catch(err => console.error(err))

        if (location.pathname.split('/')[1] === 'goog') {
            window.location.href = '/thanks/goog'
        } else if (location.pathname.split('/')[1] === 'fb') {
            window.location.href = '/thanks/fb'
        } else {
            window.location.href = '/thanks'
        }
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">See If You Business Qualifies</h2>
                {/* <br /> */}

                {/* <label htmlFor="first">First Name</label> */}
                <br />
                <input type="text" name="first" id="first" placeholder='First Name' />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="last">Last Name</label> */}
                <br />
                <input type="text" name="last" id="last" placeholder='Last Name' />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="email">Email</label> */}
                <br />
                <input type="email" name="email" id="email" placeholder='Email' />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="company">Company Name</label> */}
                <br />
                <input type="text" name="company" id="company" placeholder='Company Name' />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="title">Job Title</label> */}
                <br />
                <input type="text" name="title" id="title" placeholder='Job Title' />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="amount">Amount you're looking for</label> */}
                <br />
                <input type="number" name="amount" id="amount" placeholder="Amount you're looking for" />
                <br />
                {/* <br /> */}

                {/* <label htmlFor="phone">Phone Number</label> */}
                <br />
                <input type="number" name="phone" id="phone" placeholder="Phone Number" />
                <br />
                <br />

                <button className='form-submit-btn' onClick={handleFormSubmit}>Submit</button>
                <p className='success'>{successful}</p>
                <p className="error">{error}</p>
            </div>
        </div>
    )
}

export default FormComp