import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Site = () => {
    return (
        <>

        {/* HEADER */}
        <Header />
        {/* MAIN */}
        <main>
            <Outlet />
        </main>
        {/* FOOTER */}
        <Footer />
        </>
    )
}

export default Site