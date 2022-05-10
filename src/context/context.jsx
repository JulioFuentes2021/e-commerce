import React, { useState, createContext } from 'react'

const productContext = createContext()

const Context = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])
    const [mainProducts, setMainProducts] = useState([])
    const [electronics, setElectronics] = useState([])

    return (
        <productContext.Provider value={{
            mainProducts,
            setMainProducts,
            electronics,
            setElectronics,
            allProducts, setAllProducts,
            setAllProducts
        }}>
            {children}
        </productContext.Provider>
    )
}

export { productContext, Context }