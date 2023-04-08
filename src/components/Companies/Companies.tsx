import React from 'react';
import { useInView } from 'react-intersection-observer';

import Animation from 'components/ui/Animation';
import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import COMPANIES from 'constants/companies';

import CompanyCard from './components/CompanyCard';

import styles from './Companies.scss';

const Companies: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    return (
        <div className={styles.companies}>
            <Wrapper>
                <Animation type="fade">
                    <BlockHeader
                        title="getCompanies"
                    />
                </Animation>
                <div
                    className={styles.companies__list}
                    ref={ref}
                >
                    {COMPANIES.map((item, index) => (
                        <Animation
                            key={item.name}
                            mapIndex={index}
                            delay={0.5}
                            className={styles.companies__wrapper}
                            customTrigger={inView}
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
