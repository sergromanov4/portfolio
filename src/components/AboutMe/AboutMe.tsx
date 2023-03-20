import React, { useCallback, useState, useMemo } from 'react';

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

    return (
        <Wrapper>
            <div className={styles.aboutMe}>
                <BlockHeader
                    title="getAboutMe"
                    currentType={currentType}
                    typesList={typesList}
                    onChangeClick={handleClick}
                />

                <div className={styles.aboutMe__text}>
                    {mapAboutMeTypesToValue[currentType]}
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMe;
