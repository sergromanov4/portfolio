import React, { useCallback } from 'react';
import classNames from 'classnames';

import Animation from 'components/ui/Animation';
import Button from 'components/ui/Button';

import styles from './ProjectCard.scss';

interface IProjectCardProps {
    name: string;
    description: string;
    link: string;
    isEven: boolean;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
    isEven,
    name,
    description,
    link
}) => {
    const onLinkClick = useCallback(() => {
        window.open(link, '_blank', 'noreferrer');
    }, [link]);

    return (
        <div className={classNames(styles.projectCard, {
            [styles.projectCard_even]: isEven
        })}
        >
            <div className={styles.projectCard__wrapper}>
                <span className={styles.projectCard__title}>
                    {name}
                </span>
                <span className={styles.projectCard__description}>
                    {description}
                </span>

                {link && (
                    <Button onClick={onLinkClick}>
                        Project link
                    </Button>
                )}

                <div className={classNames(styles.projectCard__wrapper__circlePosition, {
                    [styles.projectCard__wrapper__circlePosition_even]: isEven
                })}
                >
                    <Animation
                        type="fade"
                        delay={1}
                    >
                        <div className={styles.projectCard__wrapper__circle} />
                    </Animation>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
