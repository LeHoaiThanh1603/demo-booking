import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/common/Header';
import Breadcrumb from '../../components/common/Breadcrumb';
import Footer from '../../components/common/Footer/Footer';

export default function HomeLayout({ children }) {
    return (
        <>
            <Header />
            <div className="body123">
                <div className="container">
                    {/* <Breadcrumb /> */}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}
