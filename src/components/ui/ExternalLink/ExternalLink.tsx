import React from 'react';

import styles from './ExternalLink.scss';

interface IExternalLinkProps {
    link?: string;
    children: JSX.Element;
}

const ExternalLink: React.FC<IExternalLinkProps> = ({
    link,
    children
}) => {
    return (
        <a
            className={styles.externalLink}
            target="_blank"
            href={link}
            rel="noreferrer"
        >
            {children}
        </a>

    );
};

export default ExternalLink;
