import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [adoptedPet, setAdoptedPet] = useState(null);
    const [hasAnimated, setHasAnimated] = useState({});

    const contextValue = {
        adoptedPet,
        setAdoptedPet,
        hasAnimated,
        setHasAnimated
    };

    return <AppContext.Provider value={contextValue} {...props} />;
};

export { AppContextProvider, AppContext };
