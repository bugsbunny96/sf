import React from 'react';
import Carousel from './Carousel';
import OurVision from './OurVision';
import OurValues from './OurValues';
import Cards from './Cards';
import HowMightWe from './HowMightWe';

const Home = () => {
    return (
        <div>
            <Carousel />
            <OurVision />
            <OurValues />
            <Cards />
            <HowMightWe />
        </div>
    );
}

export default Home;
