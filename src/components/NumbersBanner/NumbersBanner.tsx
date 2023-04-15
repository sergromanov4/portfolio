import React from 'react';
import { useInView } from 'react-intersection-observer';

import Animation from 'components/ui/Animation';
import Wrapper from 'components/Wrapper';

import NUMBERS_LIST from 'constants/numbersBanner';

import useWindowSizeTypes from 'hooks/useWindowSizeTypes';

import styles from './NumbersBanner.scss';

const BannerText: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const { isMobile } = useWindowSizeTypes();

    return (
        <Wrapper>
            <div
                ref={ref}
                className={styles.numbersBanner}
            >
                {NUMBERS_LIST.map((item, index) => (
                    <Animation
                        mapIndex={index}
                        delay={isMobile ? 0 : 1.6}
                        key={item.description}
                        className={styles.numbersBanner__item__wrapper}
                        customTrigger={inView}
                    >
                        <div className={styles.numbersBanner__item}>
                            <span>
                                {item.number}
                            </span>
                            <span>
                                {item.description}
                            </span>
                        </div>
                    </Animation>
                ))}
            </div>
        </Wrapper>
    );
};

export default BannerText;
