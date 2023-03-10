// import { createContext } from 'react';

// const AppContext = createContext();

// export default AppContext;

import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [adoptedPet, setAdoptedPet] = useState(null);
    const [hasAnimated1, setHasAnimated1] = useState(false);

    const contextValue = {
        adoptedPet,
        setAdoptedPet,
        hasAnimated1,
        setHasAnimated1
    };

    return <AppContext.Provider value={contextValue} {...props} />;
};

export { AppContextProvider, AppContext };
