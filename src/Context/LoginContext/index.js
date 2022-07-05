import React, { createContext, useEffect, useState } from "react";


export const LoginContext = createContext({})

export const LoginProvider = ({ children }) => {
    const [isLog, setIsLog] = useState(false)

    useEffect(() => {
        setIsLog(Boolean(localStorage.getItem('isLog')))
    }, [])

    return (
        <LoginContext.Provider value={{ isLog, setIsLog }}>
            {children}
        </LoginContext.Provider>
    )
}

