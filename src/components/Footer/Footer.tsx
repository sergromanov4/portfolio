import React from 'react';

import Animation from 'components/ui/Animation';
import Contacts from 'components/Contacts';
import Wrapper from 'components/Wrapper';

import styles from './Footer.scss';

const Footer: React.FC = () => {
    return (
        <Wrapper>
            <Animation
                type="fade"
                className={styles.footer__wrapper}
            >
                <div className={styles.footer}>
                    <span className={styles.footer__title}>
                        Are you hiring?
                    </span>

                    <span className={styles.footer__text}>
                        I`m ready to join the team! Contact me!
                    </span>

                    <Contacts />
                </div>
            </Animation>
        </Wrapper>
    );
};

export default Footer;
