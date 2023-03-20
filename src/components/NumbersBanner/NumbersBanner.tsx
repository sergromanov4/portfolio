import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import Wrapper from 'components/Wrapper';

import NUMBERS_LIST from 'constants/numbersBanner';

import styles from './NumbersBanner.scss';

const BannerText: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <Wrapper>
            <div
                ref={ref}
                className={classNames(styles.numbersBanner, {
                    [styles.numbersBanner_animation]: inView
                })}
            >
                {NUMBERS_LIST.map((item) => (
                    <div
                        key={item.description}
                        className={styles.numbersBanner__item}
                    >
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
