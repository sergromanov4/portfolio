import React from 'react';

import Header from 'components/Header';
import Banner from 'components/Banner';
import NumbersBanner from 'components/NumbersBanner';
import AboutMe from 'components/AboutMe';
import Skills from 'components/Skills';
import Companies from 'components/Companies';
import Projects from 'components/Projects';
import Footer from 'components/Footer';

import styles from './MainPage.scss';

const MainPage: React.FC = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
            <Banner />
            <NumbersBanner />
            <AboutMe />
            <Skills />
            <Companies />
            <Projects />
            <Footer />
        </div>
    );
};

export default MainPage;
