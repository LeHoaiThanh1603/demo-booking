import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/common/Header'
import './index.scss'
import Breadcrumb from '../../components/common/Breadcrumb'
import Footer from '../../components/common/Footer/Footer'

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <div className="body">
                <div className="container">
                    <Breadcrumb />
                    <Outlet />
                </div>

            </div>
            <Footer />
        </>
    )
}
