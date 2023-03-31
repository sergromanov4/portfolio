import React, { useMemo } from 'react';

import Button from 'components/ui/Button';

import { CONTACTS } from 'constants/header';

import emailIcon from 'icons/contacts/email.svg';

import styles from './Contacts.scss';

interface IContactsProps {
    isFooter?: boolean;
}

const Contacts: React.FC<IContactsProps> = ({
    isFooter = false
}) => {
    const list = useMemo(() => (
        isFooter
            ? [...CONTACTS, {
                name: 'email',
                icon: emailIcon,
                link: ''
            }]
            : CONTACTS
    ), [isFooter]);

    return (
        <ul className={styles.contacts}>
            {list.map((item) => (
                <li
                    key={item.name}
                    className={styles.contacts__item}
                >
                    <img
                        className={styles.contacts__item__icon}
                        src={item.icon}
                        alt="icon"
                    />
                    {item.name}
                </li>
            ))}
            {!isFooter && (
                <Button>
                    <img
                        className={styles.contacts__item__icon}
                        src={emailIcon}
                        alt="icon"
                    />
                    Contacts
                </Button>
            )}
        </ul>
    );
};

export default Contacts;
