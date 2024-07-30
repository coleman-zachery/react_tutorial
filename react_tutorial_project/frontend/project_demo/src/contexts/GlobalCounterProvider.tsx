import React, { createContext, useContext, useState } from 'react'

const GlobalCounterContext = createContext<any>(0)
export const useGlobalCounterContext = () => useContext(GlobalCounterContext)

export const GlobalCounterProvider: React.FC<any> = ({ children }) => {
    const [globalCount, setGlobalCount] = useState(0)
    const IncreaseGlobalCount = () => {
        setGlobalCount(prevCount => prevCount + 1)
    }

    return (<>
    <GlobalCounterContext.Provider value={{ globalCount, IncreaseGlobalCount }}>
        { children }
    </GlobalCounterContext.Provider>
    </>)
}