"use client"
import React, { createContext, useState } from "react";

export const BalanceContext = createContext({
    balance:100,
    incrementFunc: () => {},
    decrementFunc: () => {},
}
)

interface  BalanceProviderPropsType {
    children: React.ReactNode,
}
 export const BalanceProvider = ({children}: BalanceProviderPropsType) => {
    const [balance,setBalance] = useState(100);
    const incrementFunc = () => {
        setBalance(prev => prev +10);
    }

     const decrementFunc = () => {
        setBalance(prev => prev -5 );
    }

    return(
        <BalanceContext.Provider value={{balance, incrementFunc,decrementFunc}}>
        {children}
        </BalanceContext.Provider>
    )
 }