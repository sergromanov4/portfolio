import React from 'react';

import Header from 'components/Header';
import Banner from 'components/Banner';
import NumbersBanner from 'components/NumbersBanner';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <NumbersBanner />
        </div>
    );
};

export default App;
