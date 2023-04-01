import React from 'react';

import Animation from 'components/ui/Animation';
import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import COMPANIES from 'constants/companies';

import CompanyCard from './components/CompanyCard';

import styles from './Companies.scss';

const Companies: React.FC = () => {
    return (
        <div className={styles.companies}>
            <Wrapper>
                <Animation type="fade">
                    <BlockHeader
                        title="getCompanies"
                    />
                </Animation>
                <div className={styles.companies__list}>
                    {COMPANIES.map((item, index) => (
                        <Animation
                            key={item.name}
                            mapIndex={index}
                            delay={0.5}
                            className={styles.companies__wrapper}
                        >
                            <CompanyCard
                                name={item.name}
                                postFrom={item.postFrom}
                                postTo={item.postTo}
                                dateFrom={item.dateFrom}
                                dateTo={item.dateTo}
                                link={item.link}
                                img={item.imgType}
                            />
                        </Animation>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Companies;
