import React, { useState, useEffect, useContext } from 'react'
import { productContext } from '../context/context';

const useFetchData = (url, state, setState) => {
    const [data, setData] = useState()
    // const { state, setState } = useContext(productContext)

    useEffect(() => {

        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setState(data.products)
        }

        getData()
    }, [url])

    return [state]
}

export default useFetchData