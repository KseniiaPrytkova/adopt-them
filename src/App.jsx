import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return <div className="m-4 text-3xl">hello</div>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(App));
