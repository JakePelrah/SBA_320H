import { createContext, useContext, ReactNode, useState, useEffect } from "react";


const LoggedInContext = createContext<any | undefined>(undefined);;
export const useLoggedIn = () => useContext(LoggedInContext)

export default function LoggedInProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<object>({})


    useEffect(() => {
        fetch('/isLoggedIn')
            .then(res => res.json())
            .then(setIsLoggedIn)
    }, [])


    return (
        <LoggedInContext.Provider value={{
            isLoggedIn
        }}>
            {children}
        </LoggedInContext.Provider>
    );
};