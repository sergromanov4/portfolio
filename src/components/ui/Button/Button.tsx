import React from 'react';
import classnames from 'classnames';

import styles from './Button.scss';

const onClickHandlerBypass = (): void => {};

interface IButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isInline?: boolean;
    children?: React.ReactNode;
    className?: string;

}

const Button: React.FC<IButtonProps> = ({
    children,
    onClick = onClickHandlerBypass,
    isInline,
    className
}) => {
    return (
        <button
            className={classnames(styles.button, {
                [styles.button__inline]: isInline
            }, className)}
            type="button"
            onClick={onClick}
        >
            <div className={styles.button__wrapper}>
                {children}
            </div>
        </button>
    );
};

export default Button;
