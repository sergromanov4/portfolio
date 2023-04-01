import React from 'react';

import Wrapper from 'components/Wrapper';
import Animation from 'components/ui/Animation';

import BannerText from './components/BannerText';
import BannerImage from './components/BannerImage';

import styles from './Banner.scss';

const Banner: React.FC = () => {
    return (
        <Wrapper>
            <div className={styles.banner}>
                <Animation type="slideLeft">
                    <BannerText />
                </Animation>

                <Animation
                    type="slideRight"
                    delay={0.8}
                >
                    <BannerImage />
                </Animation>
            </div>
        </Wrapper>
    );
};

export default Banner;
