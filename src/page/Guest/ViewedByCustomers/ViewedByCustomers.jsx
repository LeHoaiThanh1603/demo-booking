import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, List, Row, Space } from 'antd';
import React, { useState } from 'react';
import { FaBed, FaHotel } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { iconHotel } from '../../../asset/svg';
import './ViewedByCustomers.scss';
import { UserOutlined, AreaChartOutlined } from '@ant-design/icons';
import { BiBed } from 'react-icons/bi';
import { TbRuler } from 'react-icons/tb';

const data = [
    {
        key: 1,
        href: 'https://ant.design',
        img: 'https://du-lich.chudu24.com/f/m/2105/18/melia-ho-tram-beach-resort-4.jpg?w=250&h=200',
        title: `Melia Hồ Tràm Beach Resort`,
        avatar: iconHotel,
        description:
            'Nhà hàng Khách sạn Corvin có sức chứa 200 khách với nhiều món ăn Á Âu và các món đặc sản ven biển.',
        content: `Melia Hồ Tràm Beach Resort (Melia Ho Tram) tọa lạc tại xã Phước Thuận, huyện Xuyên Mộc, tỉnh Bà Rịa Vũng Tàu. Khu nghỉ dưỡng cách thành phố Hồ Chí Minh (sân bay Tân Sơn Nhất) khoảng 107km, cách thành phố Vũng Tàu 37,6km, cách bến xe Xuyên Mộc khoảng 9km và cách bến tàu cánh ngầm 45,2km.

        Melia Hồ Tràm Beach Resort do tập đoàn Meliã Hotels International làm đơn vị quản lý. Melia Ho Tram bắt đầu đón khách từ tháng 3 năm 2019 và chính thức khai trương vào tháng 4 năm 2019.`,
    },
    {
        key: 2,
        href: 'https://ant.design',
        img: 'https://du-lich.chudu24.com/f/m/2201/19/holiday-inn-resort-ho-tram-beach-4.jpg?w=250&h=200',
        title: `Holiday Inn Resort Hồ Tràm Beach`,
        avatar: iconHotel,
        description:
            'Nhà hàng Khách sạn Corvin có sức chứa 200 khách với nhiều món ăn Á Âu và các món đặc sản ven biển.',
        content: `
        Melia Hồ Tràm Beach Resort do tập đoàn Meliã Hotels International làm đơn vị quản lý. Melia Ho Tram bắt đầu đón khách từ tháng 3 năm 2019 và chính thức khai trương vào tháng 4 năm 2019.`,
    },
    {
        key: 3,
        href: 'https://ant.design',
        img: 'https://du-lich.chudu24.com/f/m/2105/05/khach-san-mercure-vung-tau-18.jpg?w=250&h=200',
        title: `Khách sạn Mercure Vũng Tàu`,
        avatar: iconHotel,
        description:
            'Nhà hàng Khách sạn Corvin có sức chứa 200 khách với nhiều món ăn Á Âu và các món đặc sản ven biển.',
        content: `
        Melia Hồ Tràm Beach Resort do tập đoàn Meliã Hotels International làm đơn vị quản lý. Melia Ho Tram bắt đầu đón khách từ tháng 3 năm 2019 và chính thức khai trương vào tháng 4 năm 2019.`,
    },
    {
        key: 4,
        href: 'https://ant.design',
        img: 'https://du-lich.chudu24.com/f/m/2105/19/lan-rung-phuoc-hai-resort-spa-11.jpg?w=250&h=200',
        title: `Lan Rừng Phước Hải Resort & Spa`,
        avatar: iconHotel,
        description:
            'Nhà hàng Khách sạn Corvin có sức chứa 200 khách với nhiều món ăn Á Âu và các món đặc sản ven biển.',
        content: `Lan Rừng Phước Hải Resort hay thường được gọi là Lan Rừng Long Hải, resort nằm dọc trên bờ biển Phước Hải, dưới chân núi Minh Đạm, resort cách thành phố Hồ Chí Minh khoảng 100km, cách trung tâm Vũng Tàu tầm 28km. Khu nghỉ dưỡng do kiến trúc sư Graham Taylor thiết kế, nổi bật với kiến trúc Địa Trung Hải và được ví như Santorini thu nhỏ tại Việt Nam.

        Resort do Lan Rừng Resort & Villas làm chủ đầu tư và Thủ Thiêm Real làm đơn vị & phân phối độc quyền. Resort chính thức khai trương vào cuối tháng 1/2018.

        Resort bao gồm phòng khách sạn, căn hộ và biệt thự tuy nhiên tính đến 2018 chỉ có dạng phòng khách sạn đi vào hoạt động (thời gian hoạt động của dạng biệt thự và căn hộ sẽ được cập nhật sau).

        * Hồ bơi: Resort có 01 hồ bơi người lớn, rộng khoảng 350m2 có độ sâu thấp nhất là 1m4 và cao nhất là 1m5. Resort không có hồ bơi riêng cho trẻ em, chỉ có khu vực nước nông dành cho trẻ em nằm chung hồ bơi người lớn với độ sâu 0,5m (Phụ huynh nên tắm cùng các bé). Thời gian hoạt động: 06:00-19:00. Có cứu hộ tại hồ bơi hoạt động từ 06:00-18:00.

        Điểm đặc biệt của hồ bơi tại resort chính là có nhiều cây cầu bắc qua. Du khách có thể tạo dáng chụp ảnh tại đây.

        * Khu vui chơi trẻ em: Resort có khu vui chơi miễn phí cho trẻ em nằm gần hồ bơi. Khu vui chơi chưa hỗ trợ dịch vụ bảo mẫu. Thời gian hoạt động: 06:00-19:00.

        * Di chuyển nội khu: Du khách di chuyển bộ đến các địa điểm trong nội khu.

        * Đối tượng ưa chuộng nghỉ dưỡng: Resort sở hữu phong cách độc đáo nên được nhiều bạn trẻ lựa chọn. Ngoài ra, resort cũng thích hợp với gia đình, cặp đôi hoặc những ai muốn tìm không gian nghỉ dưỡng thực thụ.

        * Đánh giá của khách hàng Chudu24

        "Resort có thiết kế đẹp, khuôn viên đẹp"

        "Nhân viên vui vẻ, nhiệt tình"

        "Phòng ốc mới, sạch sẽ"

`,
    },
];
const dataRoom = [
    {
        roomName: 'Deluxe Triple Seaview',
        singleBed: '1 Giường',
        doubleBed: '2 Giường',
        guest: '3 Khách',
        acreage: '52.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-86acc9fdf86e4460458108b8b32b9aae.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-867865dfe31a9047505bdceba3ee3afc.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b3d3d1264fd1a61788256a3773f148c4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-953b2ec24746f04f2e90a22cd1f719d4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
    {
        roomName: 'Suite Sea View',
        singleBed: '1 Giường',
        doubleBed: '',
        guest: '2 Khách',
        acreage: '32.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-7ec76b419305b029dbe4a19adfbd777e.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b60eb596e23405d70599a41ac2824bda.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-ffd21459a6ceecd872730ed34154aecc.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-7ecf61d521aea8258f2638bd577ea9de.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
    {
        roomName: 'Grand Suite',
        singleBed: '1 Giường',
        doubleBed: '2 Giường',
        guest: '3 Khách',
        acreage: '43.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-2d1bb4b37952007f67de1df1a535915f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-50790f23f35d92d5b02c6f047d36d927.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-bdf2ffe9e221b018344a9cf1c94d1e1d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-1d2dd936263303aa224b25e639dbeb4b.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-0b819aea352de86352acb381fb646c1a.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-7ecf61d521aea8258f2638bd577ea9de.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
    {
        roomName: '',
        singleBed: '1 Giường',
        doubleBed: '2 Giường',
        guest: '3 Khách',
        acreage: '52.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-86acc9fdf86e4460458108b8b32b9aae.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-867865dfe31a9047505bdceba3ee3afc.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b3d3d1264fd1a61788256a3773f148c4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-953b2ec24746f04f2e90a22cd1f719d4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
    {
        roomName: '2 Bedrooms Suite Sea View',
        singleBed: '',
        doubleBed: '2 Giường',
        guest: '4 Khách',
        acreage: '122.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b1b5e9012efc67b0615842132282caf0.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-ffd21459a6ceecd872730ed34154aecc.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-bd3c46bb5c8770a11b43e4189df6c91d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-918ebba49fb9d6c95f64fc076492eab3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-d3cf6044b65166d9cb61def79443e541.png?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
    {
        roomName: 'Imperial Suite',
        singleBed: '1 Giường',
        doubleBed: '2 Giường',
        guest: '6 Khách',
        acreage: '72.0 m²',
        img: [
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b05d4facf16c2f592b44fb75ff345bb3.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-efea359c5a4dd10db36f1d9e6b34d83f.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-b4bb59cc1d0e2a24485982fb41f0ac0d.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-3a0b0b519d5dfd867b14dac5ba5b0a62.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-0633f5df98851d06b995b52c50ff2964.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-5704ed5de44ca16a87558323cc8c6cb4.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
            'https://ik.imagekit.io/tvlk/generic-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10019885-7ecf61d521aea8258f2638bd577ea9de.jpeg?_src=imagekit&tr=c-at_max,h-360,q-40,w-550',
        ],
    },
];

const { Meta } = Card;
const ViewedByCustomers = () => {
    return (
        <>
            <div className="viewed-hotel">
                <h2 style={{ marginBottom: '12px' }}>Khách sạn đã xem</h2>
                <List
                    bordered
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item
                            className="list-item"
                            key={item.title}
                            extra={<img width={272} alt="logo" src={item.img} />}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
            </div>
            <Divider />
            <div className="viewed__room">
                <h2 style={{ marginBottom: '12px' }}>Phòng đã xem</h2>
                <Row gutter={16}>
                    {dataRoom.map((item) => (
                        <Col span={6} className="viewed__room-card">
                            <Card
                                cover={
                                    <>
                                        <Row>
                                            {item.img.slice(0, 1).map((image) => (
                                                <Col span={24}>
                                                    <div className="viewed__room-card__main">
                                                        <img
                                                            className="viewed__room-card__imgmain"
                                                            alt="example"
                                                            src={image}
                                                        />
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                        <Row className="viewed__room-card__imgbox3">
                                            {item.img.slice(1, 4).map((image) => (
                                                <Col span={8}>
                                                    <img
                                                        className="viewed__room-card__img"
                                                        alt="example"
                                                        src={image}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    </>
                                }
                            >
                                <Meta
                                    className="room-info"
                                    title={item.roomName}
                                    description={
                                        <>
                                            <List>
                                                <List.Item>
                                                    <Space>
                                                        <BiBed />
                                                        <span>{item.singleBed} đơn</span>
                                                    </Space>
                                                    <Space>
                                                        <BiBed />
                                                        <span>{item.doubleBed} đôi</span>
                                                    </Space>
                                                </List.Item>
                                                <List.Item>
                                                    <Space>
                                                        <UserOutlined />
                                                        <span>{item.guest}</span>
                                                    </Space>
                                                </List.Item>
                                                <List.Item>
                                                    <Space>
                                                        <TbRuler />
                                                        <span>{item.acreage}</span>
                                                    </Space>
                                                </List.Item>
                                            </List>
                                        </>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default ViewedByCustomers;
