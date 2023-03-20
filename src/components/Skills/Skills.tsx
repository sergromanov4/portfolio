import React, { useCallback, useMemo, useState } from 'react';

import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import mapSkillsTypesToValue from 'constants/skills';

import { ESkillsTypes } from 'constants/enum/ECommonTypes';

import styles from './Skills.scss';

const Skills: React.FC = () => {
    const [currentType, setCurrentType] = useState<ESkillsTypes>(ESkillsTypes.main);

    const handleClick = useCallback((type: ESkillsTypes) => {
        setCurrentType(type);
    }, []);

    const typesList = useMemo(() => (
        Object.values(ESkillsTypes) || []
    ), []);

    return (
        <div className={styles.skills}>
            <Wrapper>
                <BlockHeader
                    title="getSkills"
                    typesList={typesList}
                    currentType={currentType}
                    onChangeClick={handleClick}
                />

                <div className={styles.skills__list}>
                    {mapSkillsTypesToValue[currentType].map((item) => (
                        <div
                            key={item.name}
                            className={styles.skills__list__item}
                        >
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
