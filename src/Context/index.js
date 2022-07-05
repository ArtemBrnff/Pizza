import React, { createContext, useState } from "react"

export const ShCartContext = createContext({})
export const ShCartProvider = ({ children }) => {
    const [pizzasState, setPizzasState] = useState([])

    const addToCart = (pizza) => {
        setPizzasState([...pizzasState, pizza])
    }
    const removeFromCart = (pizza) => {
        setPizzasState(pizzasState.filter(item => item.id !== pizza.id))
    }

    return (
        <ShCartContext.Provider value={{ pizzasState, addToCart, removeFromCart }}>
            {children}
        </ShCartContext.Provider>
    )
}