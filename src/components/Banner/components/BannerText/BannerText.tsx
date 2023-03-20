import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import styles from './BannerText.scss';

const BannerText: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div
            ref={ref}
            className={classNames(styles.bannerText, {
                [styles.bannerText_animation]: inView
            })}
        >
            <span className={styles.bannerText__greetings}>
                Hello! I`m
            </span>
            <span className={styles.bannerText__name}>
                {'< Sergei Romanov />'}
            </span>

            <span className={styles.bannerText__post}>
                Frontend Developer
            </span>
        </div>
    );
};

export default BannerText;
