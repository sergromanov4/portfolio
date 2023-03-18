import React from 'react';
import ReactDOM from 'react-dom/client';

import MainPage from 'pages/MainPage';

import '../public/style.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<MainPage />);
