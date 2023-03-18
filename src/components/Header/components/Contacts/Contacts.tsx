import React from 'react';

import Button from 'components/ui/Button';

import { CONTACTS } from 'constants/header';

import emailIcon from 'icons/contacts/email.svg';

import styles from './Contacts.scss';

const Contacts: React.FC = () => {
    return (
        <ul className={styles.contacts}>
            {CONTACTS.map((item) => (
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
            <Button>
                <img
                    className={styles.contacts__item__icon}
                    src={emailIcon}
                    alt="icon"
                />
                Contacts
            </Button>
        </ul>
    );
};

export default Contacts;
