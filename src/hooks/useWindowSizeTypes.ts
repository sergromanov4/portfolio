import { useContext, useMemo } from 'react';

import { WindowSizeContext } from 'components/WindowSize';

import screenSizes from 'constants/screenSizes';

interface IUseWindowSizeTypes {
    isMinMobile: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
}

const useWindowSizeTypes = (): IUseWindowSizeTypes => {
    const { width: windowWidth } = useContext(WindowSizeContext);

    const windowTypes = useMemo((): IUseWindowSizeTypes => ({
        isMinMobile: windowWidth <= screenSizes.mobile,
        isMobile: windowWidth < screenSizes.tablet,
        isTablet: windowWidth >= screenSizes.tablet && windowWidth < screenSizes.laptop,
        isDesktop: windowWidth >= screenSizes.laptop
    }), [windowWidth]);

    return windowTypes;
};

export default useWindowSizeTypes;
