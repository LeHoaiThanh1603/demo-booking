import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { BiLockOpen } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';
import { MdOutlineRoomPreferences } from 'react-icons/md';
import { TbIcons } from 'react-icons/tb';
import { BsCheckAll, BsPatchQuestion } from 'react-icons/bs';
import {
    CUSTOMERSLIKED,
    NAVIGATEGUEST,
    NAVIGATEHOTEL,
    NAVIGATEHOTELQUESTION,
    NAVIGATEHOTELROOM,
    NAVIGATEHOTELUTILITIES,
    VIEWEDBYCUSSTOMERS,
} from '../../constant/common';
import './GuestLayout.scss';
import { AiFillLike } from 'react-icons/ai';
// import { useNavigation } from '@react-navigation/native';

const { Header, Sider, Content } = Layout;

const GuestLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarActive, setSidebarActive] = useState([]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const pathName = window.location.pathname;
    useEffect(() => {
        switch (pathName) {
            case '/guest':
                setSidebarActive(['1']);
                break;
            case '/guest/viewed':
                setSidebarActive(['2']);
                break;
            case '/guest/liked':
                setSidebarActive(['3']);
                break;
            default:
                setSidebarActive(['1']);
                break;
        }
    }, [pathName]);
    const items = [
        {
            key: '1',
            label: <Link to={'/user/changepassword'}>Đổi mật khẩu</Link>,
            icon: <BiLockOpen />,
        },
        {
            key: '2',
            label: <Link to={'/user/login'}>Đăng xuất</Link>,
            icon: <FaSignOutAlt />,
        },
    ];

    const navigation = useNavigate();
    function handleNavigation(navigate) {
        switch (navigate) {
            case NAVIGATEGUEST:
                navigation('');

                break;
            case VIEWEDBYCUSSTOMERS:
                navigation('/guest/viewed');
                break;
            case CUSTOMERSLIKED:
                navigation('/guest/liked');
                break;

            default:
        }
    }
    return (
        <>
            <Layout>
                <Header
                    className="headerHotel"
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '20px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <div className="headerHotel-name">
                        <div className="headerHotel-name__brand">
                            <Avatar>T</Avatar>
                            <h2>Mr.Thanh</h2>
                        </div>
                        <div className="headerHotel-name__options">
                            <h4>hoaithanhpro</h4>

                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Avatar>Admin</Avatar>
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </Header>
                <Sider trigger={null} collapsible collapsed={collapsed} className="sidebarHotel">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        selectedKeys={sidebarActive}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'Thông tin',
                                onClick: () => handleNavigation(NAVIGATEGUEST),
                            },
                            {
                                key: '2',
                                icon: <BsCheckAll />,
                                label: 'Đã xem',
                                onClick: () => handleNavigation(VIEWEDBYCUSSTOMERS),
                            },
                            {
                                key: '3',
                                icon: <AiFillLike />,
                                label: 'Đã thích',
                                onClick: () => handleNavigation(CUSTOMERSLIKED),
                            },
                        ]}
                    />
                </Sider>
                <Content className="content-hotel">
                    <Outlet />
                </Content>
            </Layout>
        </>
    );
};

export default GuestLayout;
