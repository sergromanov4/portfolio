import React, { useCallback } from 'react';
import classNames from 'classnames';

import Button from 'components/ui/Button';

import { ECompany } from 'constants/enum/ECommonTypes';

import styles from './CompanyCard.scss';

interface ICompanyCardProps {
    name: string;
    postFrom: string;
    postTo: string;
    dateFrom: string;
    dateTo: string;
    link: string;
    img: ECompany;
}

const CompanyCard: React.FC<ICompanyCardProps> = ({
    name,
    postFrom,
    postTo,
    dateFrom,
    dateTo,
    link,
    img
}) => {
    const onLinkClick = useCallback(() => {
        window.open(link, '_blank', 'noreferrer');
    }, [link]);

    return (
        <div className={styles.companyCard}>
            <div className={styles.companyCard__wrapper}>
                <div className={styles.companyCard__frontSide}>
                    <div className={classNames(styles.companyCard__frontSide__img, styles[`companyCard__frontSide__img_${img}`])} />
                    <span className={styles.companyCard__frontSide__title}>
                        {name}
                    </span>
                </div>

                <div className={styles.companyCard__backSide}>
                    <span className={styles.companyCard__backSide__title}>
                        {name}
                    </span>
                    <div className={styles.companyCard__backSide__row}>
                        <span />
                        <span>From</span>
                        <span>To</span>
                    </div>
                    <div className={styles.companyCard__backSide__row}>
                        <span>Date</span>
                        <span>{dateFrom}</span>
                        <span>{dateTo}</span>
                    </div>
                    <div className={styles.companyCard__backSide__row}>
                        <span>Position</span>
                        <span>{postFrom}</span>
                        <span>{postTo}</span>
                    </div>

                    <Button onClick={onLinkClick}>
                        Link to website
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
