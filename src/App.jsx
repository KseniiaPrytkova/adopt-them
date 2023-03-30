import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense, useEffect } from 'react';
import { AppContextProvider } from './AppContext';
// import Details from './components/Details';
// import SearchParams from './components/SearchParams';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// const Navbar = lazy(() => import('./components/Navbar'));
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
    // useEffect(() => {
    //     const loadingContainer = document.getElementById('loading-container');
    //     if (loadingContainer) {
    //         loadingContainer.style.display = 'none';
    //     }
    // }, []);

    // useEffect(() => {
    //     const theme = localStorage.getItem('theme');
    //     theme === 'dark'
    //         ? document.body.classList.add('dark')
    //         : document.body.classList.remove('dark');
    // }, []);

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
