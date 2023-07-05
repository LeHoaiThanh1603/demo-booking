import React from 'react'
import { Breadcrumb as MenuTab } from 'antd'
import './Breadcrumb.scss'
import { Link } from 'react-router-dom'

export default function Breadcrumb() {
    return (
        <div className="breadcrumb">
            <MenuTab
                items={[
                    {
                        title: 'Home',
                    },
                    {
                        title: <Link to=''>Việt Nam</Link>,
                    },
                    {
                        title: <Link to=''>Lâm Đồng</Link>,
                    },
                    {
                        title: <Link to=''>Đà Lạt</Link>,
                    },
                    {
                        title: 'Kết quả tìm kiếm ',
                    },
                ]}
            />
        </div>
    )
}
