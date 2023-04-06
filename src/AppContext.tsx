import { createContext, useState, ReactNode, FC } from 'react';
import { Pet } from './APIResponsesTypes';

interface AppContextType {
    adoptedPet: Pet | null;
    setAdoptedPet: (adoptedPet: Pet | null) => void;
    hasAnimated: { [key: string]: boolean };
    setHasAnimated: (animationState: { [key: string]: boolean }) => void;
    resultsPage: number | null;
    setResultsPage: (resultsPage: number | null) => void;
}

const defaultPet: Pet = {
    id: 1337,
    name: 'Fido',
    animal: 'dog',
    description: 'Lorem ipsum',
    breed: 'Beagle',
    images: [],
    city: 'Seattle',
    state: 'WA'
};

const defaultContextValue: AppContextType = {
    adoptedPet: defaultPet,
    setAdoptedPet: () => {},
    hasAnimated: {},
    setHasAnimated: () => {},
    resultsPage: null,
    setResultsPage: () => {}
};

const AppContext = createContext<AppContextType>(defaultContextValue);

interface AppContextProviderProps {
    children: ReactNode;
}

const AppContextProvider: FC<AppContextProviderProps> = (props) => {
    const [adoptedPet, setAdoptedPet] = useState<Pet | null>(null);
    const [hasAnimated, setHasAnimated] = useState<{ [key: string]: boolean }>(
        {}
    );
    const [resultsPage, setResultsPage] = useState<number | null>(null);

    const contextValue = {
        adoptedPet,
        setAdoptedPet,
        hasAnimated,
        setHasAnimated,
        resultsPage,
        setResultsPage
    };

    // return <AppContext.Provider value={contextValue} {...props} />;
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContextProvider, AppContext };
