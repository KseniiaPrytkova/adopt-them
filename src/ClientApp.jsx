import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App';

const ClientAppWrapper = () => {
    useEffect(() => {
        const loadingContainer = document.getElementById('loading-container');
        if (loadingContainer) {
            loadingContainer.style.display = 'none';
        }
    }, []);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        theme === 'dark'
            ? document.body.classList.add('dark')
            : document.body.classList.remove('dark');
    }, []);

    return (
        <>
            <App />
            <div id="modal"></div>
        </>
    );
};

hydrateRoot(
    document.getElementById('root'),
    <BrowserRouter>
        <ClientAppWrapper />
    </BrowserRouter>
);
