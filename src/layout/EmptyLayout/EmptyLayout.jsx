import React from 'react';
import { Outlet } from 'react-router-dom';
import './EmptyLayout.scss';

const MemberLayout = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="membersrank">
                <Outlet />
            </div>
        </>
    );
};

export default MemberLayout;
