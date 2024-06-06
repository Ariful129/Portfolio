import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import MyServices from './MyServices';
import LatestProjects from './LatestProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyServices></MyServices>
            <LatestProjects></LatestProjects>
        </div>
    );
};

export default Home;