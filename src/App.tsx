import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { AppContextProvider } from './AppContext';
import Details from './components/Details';
import SearchParams from './components/SearchParams';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

const App = () => {
    // const adoptedPet = useState(null);

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
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <Navbar />

                    <main className="min-h-[50vh] flex-auto">
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </main>

                    <Footer />
                </AppContextProvider>
                <div id="modal"></div>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');

if (!container) {
    throw new Error('no container to render to');
}

const root = createRoot(container);
root.render(<App />);
