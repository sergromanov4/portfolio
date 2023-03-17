import React from 'react';

import styles from './Logo.scss';

const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <span>
                Sergei
            </span>
            <span>
                Romanov
            </span>
        </div>
    );
};

export default Logo;
