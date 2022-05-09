import React, { useState, createContext } from 'react'

const productContext = createContext()

const Context = ({ children }) => {
    const [mainProducts, setMainProducts] = useState([])

    return (
        <productContext.Provider value={{ mainProducts, setMainProducts }}>
            {children}
        </productContext.Provider>
    )
}

export { productContext, Context }