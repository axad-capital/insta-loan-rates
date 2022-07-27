import React from 'react'
import Nav from '../LandingPage/Nav'

const LandingPageThanks = () => {
    return (
        <div>
            <Nav />
            <div style={{ textAlign: 'center', paddingTop: '100px' }}>
                <h1>
                    Thanks! Your form has been submitted successfully.
                </h1>
                <br />
                <h2>
                    We will be in touch shortly.
                </h2>
            </div>
        </div>
    )
}

export default LandingPageThanks