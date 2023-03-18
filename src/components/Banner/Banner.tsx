import React from 'react';

import Wrapper from 'components/Wrapper';

import BannerText from './components/BannerText';
import BannerImage from './components/BannerImage';

import styles from './Banner.scss';

const Banner: React.FC = () => {
    return (
        <Wrapper>
            <div className={styles.banner}>
                <BannerText />
                <BannerImage />
            </div>
        </Wrapper>
    );
};

export default Banner;
