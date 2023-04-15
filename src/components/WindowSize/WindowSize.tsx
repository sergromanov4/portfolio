import React, { useLayoutEffect, createContext, useState } from 'react';

import debounce from 'utils/debounce';

const initialSize = {
    width: 0,
    height: 0
};

export const WindowSizeContext = createContext(initialSize);

interface IWindowSizeArg {
    children: JSX.Element;
}

const WindowSize: React.FC<IWindowSizeArg> = ({ children }) => {
    const [size, setSize] = useState(initialSize);

    useLayoutEffect(() => {
        const onResize: () => void = () => setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const debouncedResize = debounce(onResize, 200);

        window.addEventListener('resize', debouncedResize);

        onResize();

        return () => window.removeEventListener('resize', debouncedResize);
    }, []);

    return (
        <WindowSizeContext.Provider value={size}>
            {children}
        </WindowSizeContext.Provider>
    );
};

export default WindowSize;
