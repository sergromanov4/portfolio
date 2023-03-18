import React from 'react';

import Wrapper from 'components/Wrapper';

import SKILLS from 'constants/skills';

import styles from './Skills.scss';

const Skills: React.FC = () => {
    return (
        <div className={styles.skills}>
            <Wrapper>
                <div className={styles.skills__header}>
                    <span className={styles.skills__title}>
                        getSkills
                    </span>
                    <span>
                        ()
                    </span>
                </div>

                <div className={styles.skills__list}>
                    {SKILLS.map((item) => (
                        <div className={styles.skills__list__item}>
                            <img
                                className={styles.skills__list__item__img}
                                src={item.icon}
                                alt="icon"
                            />
                            <span>
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Skills;
