import React from 'react';
import { useInView } from 'react-intersection-observer';
import classnames from 'classnames';

import styles from './Animation.scss';

type TAnimationType = 'slideUp' | 'fade' | 'slideRight' | 'slideLeft';

export interface IAnimationProps {
    children: React.ReactNode;
    mapIndex?: number;
    delay?: number;
    transitionDuration?: number;
    customTrigger?: boolean;
    smallOffset?: boolean;
    disable?: boolean;
    type?: TAnimationType;
    className?: string;
}

const Animation: React.FC<IAnimationProps> = ({
    children,
    mapIndex,
    delay = 0,
    customTrigger = false,
    smallOffset,
    disable = false,
    type = 'slideUp',
    transitionDuration,
    className
}) => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div
            ref={customTrigger ? null : ref}
            className={classnames(styles.animation, styles[`animation__${type}`], {
                [styles.animation_startAnimate]: (customTrigger || inView) && !disable,
                [styles.animation_smallOffset]: smallOffset
            }, className)}
            style={{
                transitionDelay: mapIndex ? `${(mapIndex * 0.3) + delay}s` : `${delay}s`,
                transitionDuration: transitionDuration ? `${transitionDuration}s` : ''
            }}
        >
            {children}
        </div>
    );
};

export default Animation;
