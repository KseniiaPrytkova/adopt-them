import { expect, test, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import useBreedList from '../customHooks/useBreedList';

const { fetch } = window;

let queryClient: QueryClient;

beforeEach(() => {
    fetch.resetMocks();
    queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
                cacheTime: Infinity,
                retry: false
            }
        }
    });
});

test('gives an empty list with no animal', () => {
    const { result } = renderHook(() => useBreedList(''), {
        wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        )
    });

    const [breedList, status] = result.current;

    expect(breedList).toHaveLength(0);
    expect(status).toBe('loading');
});

test('gives back breeds with an animal', async () => {
    const breeds = [
        'Havanese',
        'Bichon Frise',
        'Poodle',
        'Maltese',
        'Golden Retriever',
        'Labrador',
        'Husky'
    ];
    fetch.mockResponseOnce(
        JSON.stringify({
            animal: 'dog',
            breeds
        })
    );

    const { result } = renderHook(() => useBreedList('dog'), {
        wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        )
    });

    await waitFor(() => expect(result.current[1]).toBe('success'));

    const [breedList] = result.current;
    expect(breedList).toEqual(breeds);
});

test('throws an error when fetch is not `ok`', async () => {
    fetch.mockResponseOnce(
        JSON.stringify({ message: 'breeds dog fetch not ok' }),
        { status: 500 }
    );

    const { result } = renderHook(() => useBreedList('dog'), {
        wrapper: ({ children }) => (
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        )
    });

    await waitFor(() => {
        expect(result.current[1]).toBe('error');
    });

    const [breedList, status] = result.current;
    expect(breedList).toHaveLength(0);
    expect(status).toBe('error');
});
