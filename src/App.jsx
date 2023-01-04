import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
    return (
        // <div className="box-border flex min-h-full flex-col">
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Navbar />

                <main className="flex-auto">
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </main>

                <Footer />
            </QueryClientProvider>
        </BrowserRouter>
        // </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
