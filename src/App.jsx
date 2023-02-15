import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import AdoptedPetContext from './AdoptedPetContext';
import ThemeContext from './ThemeContext';
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
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const body = document.querySelector('body');
        body.classList.toggle('dark');
    };

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeContext.Provider value={{ theme, toggleTheme }}>
                    <AdoptedPetContext.Provider value={adoptedPet}>
                        <Navbar />

                        <main className="flex-auto">
                            <Routes>
                                <Route
                                    path="/details/:id"
                                    element={<Details />}
                                />
                                <Route path="/" element={<SearchParams />} />
                            </Routes>
                        </main>

                        <Footer />
                    </AdoptedPetContext.Provider>
                </ThemeContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
