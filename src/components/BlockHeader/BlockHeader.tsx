import React from 'react';
import classNames from 'classnames';

import Button from 'components/ui/Button';

import styles from './BlockHeader.scss';

interface IBlockHeaderProps {
    title: string;
    currentType?: string;
    typesList?: string[];
    onChangeClick?: (type: string) => void;
}

const BlockHeader: React.FC<IBlockHeaderProps> = ({
    title,
    currentType,
    typesList,
    onChangeClick
}) => {
    return (
        <div className={classNames(styles.blockHeader, {
            [styles.blockHeader_noArg]: !typesList
        })}
        >
            <div className={styles.blockHeader__wrapper}>
                <span className={styles.blockHeader__title}>
                    {title}
                </span>
                <span className={styles.blockHeader__brackets}>
                    (
                </span>
            </div>

            {typesList && (
                <div className={styles.blockHeader__menu}>
                    <span className={styles.blockHeader__menu__type}>
                        current:
                    </span>
                    {typesList.map((item, index) => (
                        <div
                            key={item}
                            className={styles.blockHeader__menuItem__wrapper}
                        >
                            <Button
                                onClick={() => onChangeClick(item)}
                                className={classNames(styles.blockHeader__menuItem, {
                                    [styles.blockHeader__menuItem_active]: currentType === item
                                })}
                                isInline={true}
                            >
                                {item}
                            </Button>
                            {index + 1 !== typesList.length
                                && (
                                    <span className={styles.blockHeader__lines}>
                                        ||
                                    </span>
                                )}
                        </div>
                    ))}
                </div>
            )}

            <span className={styles.blockHeader__brackets}>
                );
            </span>
        </div>
    );
};

export default BlockHeader;
