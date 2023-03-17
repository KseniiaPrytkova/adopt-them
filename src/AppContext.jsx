import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [adoptedPet, setAdoptedPet] = useState(null);
    const [hasAnimated, setHasAnimated] = useState({});
    const [resultsPage, setResultsPage] = useState(null);

    const contextValue = {
        adoptedPet,
        setAdoptedPet,
        hasAnimated,
        setHasAnimated,
        resultsPage,
        setResultsPage
    };

    return <AppContext.Provider value={contextValue} {...props} />;
};

export { AppContextProvider, AppContext };
