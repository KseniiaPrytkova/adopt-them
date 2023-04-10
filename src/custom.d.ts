declare global {
    interface Window {
        fetch: typeof fetch & {
            resetMocks: () => void;
            mockResponseOnce: (
                response: string,
                responseInit?: ResponseInit
            ) => void;
        };
    }
}

export {};
