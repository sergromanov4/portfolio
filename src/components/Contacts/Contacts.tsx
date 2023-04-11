import React from 'react';

import ExternalLink from 'components/ui/ExternalLink';

import { CONTACTS } from 'constants/header';

import styles from './Contacts.scss';

interface IContactsProps {
    isFooter?: boolean;
}

const Contacts: React.FC<IContactsProps> = () => {
    return (
        <ul className={styles.contacts}>
            {CONTACTS.map((item) => (
                <ExternalLink
                    key={item.name}
                    link={item.link}
                >
                    <li className={styles.contacts__item}>
                        <img
                            className={styles.contacts__item__icon}
                            src={item.icon}
                            alt="icon"
                        />
                        {item.name}
                    </li>
                </ExternalLink>
            ))}
        </ul>
    );
};

export default Contacts;
