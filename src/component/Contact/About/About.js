import React from 'react';
import PageTitle from '../../PageTitle';
import AboutBannerSolid from '../AboutPage/AboutBannerSolid';
import AboutExtra from '../AboutPage/AboutExtra';
import AboutMission from '../AboutPage/AboutMission';
import AboutStory from '../AboutPage/AboutStory';
import AboutVission from '../AboutPage/AboutVission';


const About = () => {
    return (
        <div>
            <PageTitle title="About Us" />
            <AboutBannerSolid />
            <AboutStory />
            <AboutMission />
            <AboutVission />
            <AboutExtra />
        </div>
    );
};

export default About;