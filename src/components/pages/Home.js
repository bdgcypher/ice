import React from 'react';
import Hero from '../Hero.js';
import Section1 from '../Section1.js';
import Section2 from '../Section2.js';
import Section3 from '../Section3.js';
import Stats from '../Stats.js';

function Home() {
    return (
        <div>
            <Hero />
            <Section1 />
            <Stats />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Home
