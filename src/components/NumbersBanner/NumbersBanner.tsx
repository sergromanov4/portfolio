import React from 'react';

import Animation from 'components/ui/Animation';
import Wrapper from 'components/Wrapper';

import NUMBERS_LIST from 'constants/numbersBanner';

import styles from './NumbersBanner.scss';

const BannerText: React.FC = () => {
    return (
        <Wrapper>
            <div className={styles.numbersBanner}>
                {NUMBERS_LIST.map((item, index) => (
                    <Animation
                        mapIndex={index}
                        delay={1.6}
                        key={item.description}
                        className={styles.numbersBanner__item__wrapper}
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
