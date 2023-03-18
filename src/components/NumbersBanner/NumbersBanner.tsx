import React from 'react';

import Wrapper from 'components/Wrapper';

import NUMBERS_LIST from 'constants/numbersBanner';

import styles from './NumbersBanner.scss';

const BannerText: React.FC = () => {
    return (
        <Wrapper>
            <div className={styles.numbersBanner}>
                {NUMBERS_LIST.map((item) => (
                    <div className={styles.numbersBanner__item}>
                        <span>
                            {item.number}
                        </span>
                        <span>
                            {item.description}
                        </span>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default BannerText;
