import { createContext } from "react";

export const BalanceContext = createContext({
    balance:1,
    incrementFunc: () => {},
    decrementFunc: () => {},
})