import React from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

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
                <BlockHeader
                    title="getCompanies"
                />
                <div
                    ref={ref}
                    className={classNames(styles.companies__list, {
                        [styles.companies__list_animation]: inView
                    })}
                >
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
