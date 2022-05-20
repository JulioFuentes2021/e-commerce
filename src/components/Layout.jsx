import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Modal from '@components/modal/modal'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* <Modal /> */}
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout