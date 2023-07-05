import { Spin } from 'antd';
import React from 'react';

const LoadingPage = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                bottom: '0',
                right: '0',
                left: '0',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#fff',
            }}
        >
            <Spin spinning />
        </div>
    );
};

export default LoadingPage;
