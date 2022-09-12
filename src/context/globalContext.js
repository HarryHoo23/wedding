import React, { useState, useContext } from "react";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    
    const [number, setNumber] = useState(1);

    const handleMoveUp = () => {
        window.fullpage_api.moveSectionUp();
    }

    const handleMoveDown = () => {
        window.fullpage_api.moveSectionDown();
    }

    return (
        <GlobalContext.Provider
            value={{
                number,
                setNumber,
                handleMoveUp,
                handleMoveDown
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export { GlobalContext, GlobalProvider };
