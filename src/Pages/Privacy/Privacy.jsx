import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import PrivacyComponent from '../../Components/Privacy/Privacy';
import Footer from '../../Components/Footer/Footer'

export default function Privacy() {
    return (
        <div>
            <Navbar />
            <PrivacyComponent className='privacy-page' />
            <Footer />
        </div>
    )
}

