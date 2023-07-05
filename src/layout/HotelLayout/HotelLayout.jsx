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
import { BsPatchQuestion } from 'react-icons/bs';
import {
    NAVIGATEHOTEL,
    NAVIGATEHOTELQUESTION,
    NAVIGATEHOTELROOM,
    NAVIGATEHOTELUTILITIES,
} from '../../constant/common';
import './HotelLayout.scss';
// import { useNavigation } from '@react-navigation/native';

const { Header, Sider, Content } = Layout;

const HotelLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [sidebarActive, setSidebarActive] = useState([]);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const pathName = window.location.pathname;
    useEffect(() => {
        switch (pathName) {
            case '/hotel':
                setSidebarActive(['1']);
                break;
            case '/hotel/room':
                setSidebarActive(['2']);
                break;
            case '/hotel/utilities':
                setSidebarActive(['3']);
                break;
            case '/hotel/question':
                setSidebarActive(['4']);
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
            case NAVIGATEHOTEL:
                navigation('');

                break;
            case NAVIGATEHOTELROOM:
                navigation('/hotel/room');
                break;
            case NAVIGATEHOTELUTILITIES:
                navigation('/hotel/utilities');
                break;
            case NAVIGATEHOTELQUESTION:
                navigation('/hotel/question');
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
                            <h2>Tulip Hotel</h2>
                        </div>
                        <div className="headerHotel-name__options">
                            <h4>Adminlator</h4>

                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={['click']}
                            >
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <Avatar>Admin</Avatar>
                                        {/* <DownOutlined /> */}
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
                                label: 'Thông tin chung',
                                onClick: () => handleNavigation(NAVIGATEHOTEL),
                            },
                            {
                                key: '2',
                                icon: <MdOutlineRoomPreferences />,
                                label: 'Phòng',
                                onClick: () => handleNavigation(NAVIGATEHOTELROOM),
                            },
                            {
                                key: '3',
                                icon: <TbIcons />,
                                label: 'Tiện ích',
                                onClick: () => handleNavigation(NAVIGATEHOTELUTILITIES),
                            },
                            {
                                key: '4',
                                icon: <BsPatchQuestion />,
                                label: 'Câu hỏi thường gặp',
                                onClick: () => handleNavigation(NAVIGATEHOTELQUESTION),
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

export default HotelLayout;
