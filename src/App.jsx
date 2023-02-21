import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import AdoptedPetContext from './AdoptedPetContext';
import Details from './Details';
import SearchParams from './SearchParams';
import Navbar from './Navbar';
import Footer from './Footer';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

const App = () => {
    const adoptedPet = useState(null);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        theme === 'dark'
            ? document.body.classList.add('dark')
            : document.body.classList.remove('dark');
    }, []);

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adoptedPet}>
                    <Navbar />

                    <main className="flex-auto">
                        <Routes>
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/" element={<SearchParams />} />
                        </Routes>
                    </main>

                    <Footer />
                </AdoptedPetContext.Provider>
                <div id="modal"></div>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
