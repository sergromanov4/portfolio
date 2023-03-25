import React from 'react';

import Header from 'components/Header';
import Banner from 'components/Banner';
import NumbersBanner from 'components/NumbersBanner';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';
import Companies from 'components/Companies';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <NumbersBanner />
            <AboutMe />
            <Skills />
            <Companies />
        </div>
    );
};

export default App;
