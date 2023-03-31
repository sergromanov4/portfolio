import React from 'react';

import Wrapper from 'components/Wrapper';
import BlockHeader from 'components/BlockHeader';

import COMPANIES from 'constants/companies';

import CompanyCard from './components/CompanyCard';

import styles from './Companies.scss';

const Companies: React.FC = () => {
    return (
        <div className={styles.companies}>
            <Wrapper>
                <BlockHeader
                    title="getCompanies"
                />
                <div className={styles.companies__list}>
                    {COMPANIES.map((item) => (
                        <CompanyCard
                            name={item.name}
                            postFrom={item.postFrom}
                            postTo={item.postTo}
                            dateFrom={item.dateFrom}
                            dateTo={item.dateTo}
                            link={item.link}
                            img={item.imgType}
                        />
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Companies;
