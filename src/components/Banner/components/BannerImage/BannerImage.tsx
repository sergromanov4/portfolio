import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import avatarIcon from 'icons/banner/avatar.svg';
import reactIcon from 'icons/banner/react.svg';
import reduxIcon from 'icons/banner/redux.svg';
import typescriptIcon from 'icons/typescript.svg';

import styles from './BannerImage.scss';

const BannerImage: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div
            ref={ref}
            className={classNames(styles.bannerImage, {
                [styles.bannerImage_animation]: inView
            })}
        >
            <img
                className={styles.bannerImage__avatar}
                src={avatarIcon}
                alt="avatar"
            />

            <div className={styles.bannerImage__reactIcon}>
                <img
                    src={reactIcon}
                    alt="icon"
                />
            </div>

            <div className={styles.bannerImage__reduxIcon}>
                <img
                    src={reduxIcon}
                    alt="icon"
                />
            </div>

            <div className={styles.bannerImage__tsIcon}>
                <img
                    src={typescriptIcon}
                    alt="icon"
                />
            </div>
        </div>
    );
};

export default BannerImage;
