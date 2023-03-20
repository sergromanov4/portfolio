import React, { useCallback, useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import { EAboutMeTypes } from 'constants/enum/ECommonTypes';
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

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <Wrapper>
            <div className={styles.aboutMe}>
                <BlockHeader
                    title="getAboutMe"
                    currentType={currentType}
                    typesList={typesList}
                    onChangeClick={handleClick}
                />

                <div
                    ref={ref}
                    className={classNames(styles.aboutMe__text, {
                        [styles.aboutMe_animation]: inView
                    })}
                >
                    {mapAboutMeTypesToValue[currentType]}
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMe;
