import React, { useCallback, useState, useMemo } from 'react';

import Wrapper from 'components/Wrapper';
import Animation from 'components/ui/Animation';
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
                <Animation
                    type="fade"
                    transitionDuration={1}
                >
                    <BlockHeader
                        title="getAboutMe"
                        currentType={currentType}
                        typesList={typesList}
                        onChangeClick={handleClick}
                    />
                </Animation>
                <div className={styles.aboutMe__text}>
                    <Animation>
                        {mapAboutMeTypesToValue[currentType]}
                    </Animation>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutMe;
