import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import '@styles/index.css';

const Layout = ({ children }) => {
    return (
        <div className="">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout