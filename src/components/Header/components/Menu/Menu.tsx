import React from 'react';

import { MENU_LIST } from 'constants/header';

import styles from './Menu.scss';

const Menu: React.FC = () => {
    return (
        <ul className={styles.menu}>
            {MENU_LIST.map((item) => (
                <li
                    key={item.name}
                    className={styles.menu__item}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
