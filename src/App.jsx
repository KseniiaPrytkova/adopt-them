import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './Details';
import SearchParams from './SearchParams';

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
        <div className="m-0 box-border p-0">
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <header className="flex p-4 text-2xl">
                        <Link to="/">
                            <span className="text-4xl">🐶</span> Adopt Them!
                        </Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
