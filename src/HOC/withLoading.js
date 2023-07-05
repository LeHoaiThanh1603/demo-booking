import { Spin } from 'antd'
import React, { Suspense } from 'react'
import LoadingPage from '../page/LoadingPage/LoadingPage'

export const withLoading = (Component) => {
    return (props) => (
        <Suspense fallback={<LoadingPage />}>
            <Component {...props} />
        </Suspense>
    )
}


