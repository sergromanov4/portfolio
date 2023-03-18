import React, { useCallback, useState, useMemo } from 'react';
import classNames from 'classnames';

import Button from 'components/ui/Button';
import Wrapper from 'components/Wrapper';

import EAboutMeTypes from 'constants/enum/EAboutMeTypes';
import mapAboutMeTypesToValue from 'constants/aboutMe';

import styles from './AboutMe.scss';

const AboutMe: React.FC = () => {
    const [currentType, setCurrentType] = useState<EAboutMeTypes>(EAboutMeTypes.career);

    const handleClick = useCallback((type: EAboutMeTypes) => {
        setCurrentType(type);
    }, []);

    const typesList = useMemo(() => (
        Object.values(EAboutMeTypes) || []
    ), []);

    return (
        <Wrapper>
            <div className={styles.aboutMe}>
                <div className={styles.aboutMe__header}>
                    <span className={styles.aboutMe__header__title}>
                        getAboutMe
                    </span>
                    <span className={styles.aboutMe__header__brackets}>
                        (current:
                    </span>
                    <div className={styles.aboutMe__header__menu}>
                        {typesList.map((item, index) => (
                            <div className={styles.aboutMe__header__menuItem__wrapper}>
                                <Button
                                    onClick={() => handleClick(item)}
                                    className={classNames(styles.aboutMe__header__menuItem, {
                                        [styles.aboutMe__header__menuItem_active]: currentType === item
                                    })}
                                    isInline={true}
                                >
                                    {mapAboutMeTypesToValue[item].title}
                                </Button>
                                {index + 1 !== typesList.length
                                && (
                                    <span className={styles.aboutMe__header__lines}>
                                        ||
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    <span className={styles.aboutMe__header__brackets}>
                        )
                    </span>
                </div>

                <div className={styles.aboutMe__text}>
                    {mapAboutMeTypesToValue[currentType].text}
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMe;
