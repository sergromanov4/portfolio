import React from 'react';

import styles from './BannerText.scss';

const BannerText: React.FC = () => {
    return (
        <div className={styles.bannerText}>
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
