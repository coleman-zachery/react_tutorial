import React, { createContext, useContext, useState } from 'react'

const CounterContext = createContext<any>(0)
export const useCounterContext = () => useContext(CounterContext)

export const CounterProvider: React.FC<any> = ({ children }) => {
    const [count, setCount] = useState(0)
    const IncreaseCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (<>
    <CounterContext.Provider value={{ count, IncreaseCount }}>
        { children }
    </CounterContext.Provider>
    </>)
}