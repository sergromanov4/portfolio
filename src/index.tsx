import React from 'react';
import ReactDOM from 'react-dom/client';

import WindowSize from 'components/WindowSize';

import MainPage from 'pages/MainPage';

import '../public/style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <WindowSize>
        <MainPage />
    </WindowSize>
);
