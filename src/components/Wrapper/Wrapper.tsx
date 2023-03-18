import React from 'react';

import styles from './Wrapper.scss';

interface IWrapperProps {
    children: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = ({
    children
}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    );
};

export default Wrapper;
