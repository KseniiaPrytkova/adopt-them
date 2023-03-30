import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';
import { AppContextProvider } from './AppContext';

import Navbar from './components/Navbar';

const Details = lazy(() => import('./components/Details'));
const SearchParams = lazy(() => import('./components/SearchParams'));
const Footer = lazy(() => import('./components/Footer'));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            suspense: true
        }
    }
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense
                fallback={
                    <div id="loading-container" className="loading-spinner">
                        🌀
                    </div>
                }
            >
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
            </Suspense>
        </QueryClientProvider>
    );
};

export default App;
