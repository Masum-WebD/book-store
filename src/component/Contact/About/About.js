import React from 'react';
import OfferNews from '../OfferNews';
import AboutBanner from './AboutBanner';
import AboutDetails from './AboutDetails';
import AboutTeam from './AboutTeam';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <AboutDetails />
            <AboutTeam />
            <OfferNews />
        </div>
    );
};

export default About;