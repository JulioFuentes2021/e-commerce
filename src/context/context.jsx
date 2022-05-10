import React, { useState, createContext } from 'react'

const productContext = createContext()

const Context = ({ children }) => {
    const [allProducts, setAllProducts] = useState([])
    const [mainProducts, setMainProducts] = useState([])
    const [electronics, setElectronics] = useState([])
    const [jewelery, setJewelery] = useState([])
    const [women, setWomen] = useState([])
    const [men, setMen] = useState([])

    return (
        <productContext.Provider value={{
            mainProducts,
            setMainProducts,
            electronics,
            setElectronics,
            allProducts,
            setAllProducts,
            jewelery,
            setJewelery,
            women,
            setWomen,
            men,
            setMen
        }}>
            {children}
        </productContext.Provider>
    )
}

export { productContext, Context }