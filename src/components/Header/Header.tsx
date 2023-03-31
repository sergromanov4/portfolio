import React from 'react';

import Wrapper from 'components/Wrapper';

import Logo from './components/Logo';
import Menu from './components/Menu';

import Contacts from '../Contacts';

import styles from './Header.scss';

const Header: React.FC = () => {
    return (
        <Wrapper>
            <div className={styles.header}>
                <Logo />
                <Menu />
                <Contacts />
            </div>
        </Wrapper>
    );
};

export default Header;
