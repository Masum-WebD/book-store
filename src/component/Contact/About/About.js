import React from 'react';
import PageTitle from '../../PageTitle';
import AboutBannerSolid from '../AboutPage/AboutBannerSolid';
import AboutExtra from '../AboutPage/AboutExtra';
import AboutMission from '../AboutPage/AboutMission';
import AboutStory from '../AboutPage/AboutStory';
import AboutVission from '../AboutPage/AboutVission';


const About = () => {
    return (
        <div className=''>
        
            <AboutBannerSolid />
            <div className='max-w-[1196px] mx-auto lg:px-4 px-4'>
                <AboutStory />
                <AboutMission />
                <AboutVission />
                <AboutExtra />
            </div>
        </div>
    );
};

export default About;