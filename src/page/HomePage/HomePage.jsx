import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useToggle from '../../hooks/useToggle';
import { Form, Button, Input, DatePicker, Card, Row, Col, Divider } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import './HomePage.scss';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import CountBooking from '../../components/common/CountBooking/CountBooking';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const { Meta } = Card;

const HomePage = () => {
    const onFinish = (value) => {
        console.log(value);
    };
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const FakeCard = [
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/vung-tau.jpg',
            title: 'Vũng tàu',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/phan-thiet.jpg',
            title: 'Phan Thiết',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/da-nang.jpg',
            title: 'Đà Nẵng',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/ho-chi-minh.jpg',
            title: 'TP Hồ Chí Minh',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/hanoi.jpg',
            title: 'Hà Nội',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/nha-trang.jpg',
            title: 'Nha Trang',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/phu-quoc.jpg',
            title: 'Phú Quốc',
        },
        {
            url: 'https://khachsan.chudu24.com/nassets/img/topcities/dalat.jpg',
            title: 'Đà Lạt',
        },
    ];

    const FakeCard1 = [
        {
            title: 'Vũng Tàu',
            description: [
                {
                    title: 'Melia Hồ Tràm Beach Resort',
                    url: '#',
                },
                {
                    title: 'Holiday Inn Resort Hồ Tràm Beach',
                    url: '#',
                },
                {
                    title: 'Khách sạn ibis Styles Vũng Tàu',
                    url: '#',
                },
                {
                    title: 'Khách sạn Mercure Vũng Tàu',
                    url: '#',
                },
                {
                    title: 'Khách sạn Imperial Vũng Tàu',
                    url: '#',
                },
            ],
        },
        {
            title: 'Phan Thiết',
            description: [
                {
                    title: 'Centara Mirage Resort Mũi Né',
                    url: '#',
                },
                {
                    title: 'The Cliff Resort & Residences Mũi Né',
                    url: '#',
                },
                {
                    title: 'The Anam Mũi Né Resort',
                    url: '#',
                },
                {
                    title: 'Movenpick Phan Thiết Resort',
                    url: '#',
                },
                {
                    title: 'Azerai Kê Gà Bay Resort',
                    url: '#',
                },
            ],
        },
        {
            title: 'Đà Nẵng',
            description: [
                {
                    title: 'InterContinental Đà Nẵng Sun Peninsula Resort',
                    url: '#',
                },
                {
                    title: 'Mikazuki Japanese Resorts & Spa Da Nang',
                    url: '#',
                },
                {
                    title: 'Vinpearl Đà Nẵng Resort & Spa',
                    url: '#',
                },
                {
                    title: 'Melia Vinpearl Condotel Riverfront Đà Nẵng',
                    url: '#',
                },
                {
                    title: 'Khách sạn Wyndham Danang Golden Bay',
                    url: '#',
                },
            ],
        },
        {
            title: 'Huế',
            description: [
                {
                    title: 'Angsana Lăng Cô Resort',
                    url: '#',
                },
                {
                    title: 'Khách sạn Melia Vinpearl Huế',
                    url: '#',
                },
                {
                    title: 'Banyan Tree Lăng Cô Resort',
                    url: '#',
                },
                {
                    title: 'Kawara Mỹ An Onsen Resort Huế',
                    url: '#',
                },
                {
                    title: 'Khách sạn Indochine Palace Huế',
                    url: '#',
                },
            ],
        },
        {
            title: 'TP Hồ Chí Minh',
            description: [
                {
                    title: 'Khách sạn Mường Thanh Luxury Sài Gòn',
                    url: '#',
                },
                {
                    title: 'Khách sạn Rex Sài Gòn',
                    url: '#',
                },
                {
                    title: 'Khách sạn Tân Sơn Nhất Sài Gòn',
                    url: '#',
                },
                {
                    title: 'Khách sạn Sheraton Saigon',
                    url: '#',
                },
                {
                    title: 'Khách sạn Caravelle Saigon',
                    url: '#',
                },
            ],
        },
        {
            title: 'Hà Nội',
            description: [
                {
                    title: 'Dolce by Wyndham Hanoi Golden Lake',
                    url: '#',
                },
                {
                    title: 'Khách sạn Melia Hanoi',
                    url: '#',
                },
                {
                    title: 'Khách sạn Capella Hà Nội',
                    url: '#',
                },
                {
                    title: 'Sofitel Legend Metropole Hanoi',
                    url: '#',
                },
                {
                    title: 'Khách sạn Lotte Hà Nội',
                    url: '#',
                },
            ],
        },
        {
            title: 'Nha Trang',
            description: [
                {
                    title: 'Movenpick Cam Ranh Resort Nha Trang',
                    url: '#',
                },
                {
                    title: 'Amiana Resort Nha Trang',
                    url: '#',
                },
                {
                    title: 'Khách sạn InterContinental Nha Trang',
                    url: '#',
                },
                {
                    title: 'Khách sạn Havana Nha Trang',
                    url: '#',
                },
                {
                    title: 'Alma Cam Ranh Resort - Nha Trang',
                    url: '#',
                },
            ],
        },
        {
            title: 'Hạ Long',
            description: [
                {
                    title: 'Vinpearl Hạ Long Resort & Spa',
                    url: '#',
                },
                {
                    title: 'Khách sạn Wyndham Legend Halong',
                    url: '#',
                },
                {
                    title: 'FLC Hạ Long Bay Golf Club & Luxury Resort',
                    url: '#',
                },
                {
                    title: 'Premier Village Halong Bay Resort',
                    url: '#',
                },
                {
                    title: 'Khách sạn Phát Linh Hạ Long Quảng Ninh',
                    url: '#',
                },
            ],
        },
        {
            title: 'Phú Quốc',
            description: [
                {
                    title: 'Khách sạn Seashells Phú Quốc',
                    url: '#',
                },
                {
                    title: 'Wyndham Grand Phú Quốc',
                    url: '#',
                },
                {
                    title: 'InterContinental Phú Quốc Long Beach Resort',
                    url: '#',
                },
                {
                    title: 'Sheraton Phú Quốc Long Beach Resort (Vinpearl Golf cũ)',
                    url: '#',
                },
                {
                    title: 'Regent Phú Quốc Resort',
                    url: '#',
                },
            ],
        },
        {
            title: 'Đà Lạt',
            description: [
                {
                    title: 'Terracotta Đà Lạt Hotel & Resort',
                    url: '#',
                },
                {
                    title: 'Khách sạn Colline Đà Lạt',
                    url: '#',
                },
                {
                    title: 'Mercure Đà Lạt Resort',
                    url: '#',
                },
                {
                    title: 'Khách sạn Golf Valley Đà Lạt',
                    url: '#',
                },
                {
                    title: 'Khách sạn Marigold Đà Lạt',
                    url: '#',
                },
            ],
        },
    ];

    const FakeCard2 = [
        {
            url: 'https://du-lich.chudu24.com/f/m/1603/17/340-x-219-PHAN-THIET-2.jpg?w=260&h=170',
            title: 'Top khuyến mãi',
            description: [
                {
                    title: 'Vé máy bay giảm - Chốt phòng sang giá hời',
                    url: '#',
                },
                {
                    title: 'Vũng Tàu - Hồ Tràm tung loạt deal xịn!',
                    url: '#',
                },
                {
                    title: 'Đà Nẵng: Ưu đãi đặt sớm Lễ hội pháo hoa',
                    url: '#',
                },
                {
                    title: 'Mừng sinh nhật Vinpearl Phú Quốc 2023',
                    url: '#',
                },
                {
                    title: '03 Resort Onsen Nhật hot nhất Bắc Bộ',
                    url: '#',
                },
                {
                    title: 'Nghỉ dưỡng Nha Trang - Check in cực sang',
                    url: '#',
                },
                {
                    title: 'Top resort Phú Quốc tung giá chào hè',
                    url: '#',
                },
                {
                    title: 'Ưu đãi Villa Vinpearl Nha Trang hấp dẫn!',
                    url: '#',
                },
                {
                    title: 'Hạ Long | Phòng đẹp giá tốt - Book ngay!',
                    url: '#',
                },
                {
                    title: 'Top KS Sapa được yêu thích hiện nay',
                    url: '#',
                },
                {
                    title: 'Sài Gòn | List phù hợp công tác & nghỉ ngơi',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/2003/13/1553743301-du-lich-quy-nhon-tu-a-z-0952465.jpg?w=260&h=170',
            title: 'Top Siêu Sang',
            description: [
                {
                    title: 'Amanoi Resort - Kiệt tác nghệ thuật Vĩnh Hy',
                    url: '#',
                },
                {
                    title: 'Câu chuyện về InterContinental Đà Nẵng',
                    url: '#',
                },
                {
                    title: 'Four Seasons Hội An - Nơi "trú ẩn" yên bình',
                    url: '#',
                },
                {
                    title: 'Trải nghiệm ẩm thực ở Regent Phú Quốc',
                    url: '#',
                },
                {
                    title: 'Lý do khiến JW Marriott Phú Quốc mãi HOT',
                    url: '#',
                },
                {
                    title: 'Lang thang cảm nhận Six Senses Côn Đảo',
                    url: '#',
                },
                {
                    title: 'Thiên đường có thật Six Senses Nha Trang',
                    url: '#',
                },
                {
                    title: 'An Lâm Nha Trang - Vẻ đẹp thiên nhiên',
                    url: '#',
                },
                {
                    title: 'Hoạt động giải trí ở Banyan Tree Lăng Cô',
                    url: '#',
                },
                {
                    title: 'Tinh túy ẩm thực đến từ Zannier Phú Yên',
                    url: '#',
                },
                {
                    title: 'Đắm chìm trước villa Anantara Quy Nhơn',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1602/03/victoria-phan-thiet-pool-1-654-0.jpg?w=260&h=170',
            title: 'Đà Lạt - Sapa',
            description: [
                {
                    title: 'List khách sạn trung tâm Đà Lạt đáng ở',
                    url: '#',
                },
                {
                    title: 'Trải nghiệm se lạnh ở các resort Tuyền Lâm',
                    url: '#',
                },
                {
                    title: 'NEW! Dalat Edensee khai trương khu mới',
                    url: '#',
                },
                {
                    title: 'Thưởng cảm phong vị châu Âu giữa Đà Lạt',
                    url: '#',
                },
                {
                    title: 'Check-in triệu like tại Terracotta Đà Lạt',
                    url: '#',
                },
                {
                    title: 'Khách sạn Đà Lạt Prince - Vui Lễ Giá Hời!',
                    url: '#',
                },
                {
                    title: 'Săn mây ở Ville De Mont Mountain Sapa',
                    url: '#',
                },
                {
                    title: 'Top các resort Sapa tuyệt đỉnh cực chill',
                    url: '#',
                },
                {
                    title: ' "Châu Âu thu nhỏ" De La Coupole Sapa',
                    url: '#',
                },
                {
                    title: 'Thư giãn ở các KS Sapa có hồ bơi nước ấm',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1706/29/khach-san-sofitel-legend-metropole-1.jpg?w=260&h=170',
            title: 'Vũng Tàu - Phan Thiết',
            description: [
                {
                    title: 'Top resort Hồ Tràm cực đỉnh',
                    url: '#',
                },
                {
                    title: 'The Anam Mũi Né Resort',
                    url: '#',
                },
                {
                    title: 'Melia Hồ Tràm - Deal xịn 2023',
                    url: '#',
                },
                {
                    title: 'Holiday Inn Hồ Tràm-Free đưa đón 2 chiều',
                    url: '#',
                },
                {
                    title: 'Siêu phẩm Châu Âu ngay tại Vũng Tàu',
                    url: '#',
                },
                {
                    title: 'Vias Vũng Tàu lọt top yêu thích',
                    url: '#',
                },

                {
                    title: 'Mercure Vũng Tàu tung giá độc quyền',
                    url: '#',
                },
                {
                    title: 'Resort suối khoáng Bình Châu siêu hot',
                    url: '#',
                },
                {
                    title: 'Azerai Kê Gà - Sự thanh bình bên bờ biển',
                    url: '#',
                },
                {
                    title: 'Tuyệt đỉnh nghỉ dưỡng Centara Mũi Né',
                    url: '#',
                },
                {
                    title: 'Trình làng tân binh The Anam Mũi Né',
                    url: '#',
                },
                {
                    title: 'Ngôi sao Movenpick sáng rực Phan Thiết',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1705/20/17862659_405882159779056_7848052788040571943_n-0.jpg?w=260&h=170',
            title: 'Phú Quốc - Nha Trang',
            description: [
                {
                    title: 'Regent PQ - Siêu phẩm giới thượng lưu',
                    url: '#',
                },
                {
                    title: 'Sheraton PQ - Tọa độ nghỉ dưỡng hấp dẫn',
                    url: '#',
                },
                {
                    title: 'Biệt thự New World PQ siêu đỉnh',
                    url: '#',
                },
                {
                    title: 'JW Marriott PQ - Địa đàng nhân gian',
                    url: '#',
                },
                {
                    title: 'Crowne Plaza Phú Quốc tung deal sốc',
                    url: '#',
                },
                {
                    title: 'Resort PQ có view chất bất kể ngày đêm',
                    url: '#',
                },
                {
                    title: 'Radisson Blu Cam Ranh - Từ 900k/khách',
                    url: '#',
                },
                {
                    title: 'Muốn lãng mạn chọn top resort Nha Trang',
                    url: '#',
                },
                {
                    title: 'Top resort lý tưởng khu vực Cam Ranh',
                    url: '#',
                },
                {
                    title: 'Chốn thiên đường ở Six Senses Nha Trang',
                    url: '#',
                },
                {
                    title: 'Lánh phố ở siêu resort vịnh Ninh Vân',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1601/20/340-x-219-DA-LAT-1.jpg?w=260&h=170',
            title: 'Hạ Long - Lân cận HN',
            description: [
                {
                    title: 'Top khách sạn Hạ Long khu vực Bãi Cháy',
                    url: '#',
                },
                {
                    title: '5 resort/khách sạn Hạ Long có giá tốt',
                    url: '#',
                },
                {
                    title: 'Thiên đường biển Vinpearl Hạ Long',
                    url: '#',
                },
                {
                    title: 'FLC Hạ Long - Kỳ quan nghỉ dưỡng',
                    url: '#',
                },
                {
                    title: 'Mường Thanh Hạ Long chỉ từ 7xxk/khách',
                    url: '#',
                },
                {
                    title: 'Top 5 khu nghỉ cận Hà Nội siêu lí tưởng',
                    url: '#',
                },
                {
                    title: 'Top 3 resort Bắc Bộ có trọn gói tắm Onsen',
                    url: '#',
                },
                {
                    title: 'Phải lòng vẻ đẹp bình yên của Melia Bavi',
                    url: '#',
                },
                {
                    title: 'Serena Hòa Bình - Tiên cảnh siêu đẹp',
                    url: '#',
                },
                {
                    title: 'Legacy Yên Tử - Nghỉ dưỡng hoàng gia',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1811/08/codotel2-1441174.jpg?w=260&h=170',
            title: 'Đà Nẵng - Huế - Hội An',
            description: [
                {
                    title: 'Top Villa Đà Nẵng chỉ từ 885k/khách',
                    url: '#',
                },
                {
                    title: ' InterContinental Danang tuyệt tác siêu sang',
                    url: '#',
                },
                {
                    title: ' TIA Đà Nẵng - “Địa đàng nhân gian”',
                    url: '#',
                },
                {
                    title: 'Tận hưởng resort biển Furama Đà Nẵng',
                    url: '#',
                },
                {
                    title: 'Lạc vào xứ sở hoa anh đào tại Mikazuki Danang',
                    url: '#',
                },
                {
                    title: 'Top resort Huế lý tưởng mùa lễ hội',
                    url: '#',
                },
                {
                    title: 'Banyan Tree Lăng Cô - Nét đẹp cung đình Huế',
                    url: '#',
                },
            ],
        },
        {
            url: 'https://du-lich.chudu24.com/f/m/1705/09/premier-village-danang-resort-managed-by-accor-4.jpg?w=260&h=170',
            title: 'Khách sạn quốc tế',
            description: [
                {
                    title: 'Thái Lan: Hiện tượng du lịch châu Á',
                    url: '#',
                },
                {
                    title: ' Trải nghiệm mùa hè sôi động ở Mỹ',
                    url: '#',
                },
                {
                    title: ' Singapore: Thiên đường giải trí & mua sắm',
                    url: '#',
                },
                {
                    title: ' Hồng Kông - Du lịch xin visa online đơn giản',
                    url: '#',
                },

                {
                    title: ' Du lịch khám phá mùa thu nước Úc',
                    url: '#',
                },
                {
                    title: '  Hàn Quốc - Điểm đến bậc nhất châu Á',
                    url: '#',
                },
                {
                    title: ' "Hòn đảo thiên đường" của châu Á - Bali',
                    url: '#',
                },
                {
                    title: '  Mua sắm sành điệu ở Kuala Lumpur',
                    url: '#',
                },
            ],
        },
    ];

    const FakeCard3 = [
        {
            url: '#',
            title: 'Khách sạn An Giang',
        },
        {
            url: '#',
            title: 'Khách sạn Bạc Liêu',
        },
        {
            url: '#',
            title: 'Khách sạn Bảo Lộc',
        },
        {
            url: '#',
            title: 'Khách sạn Bến Tre',
        },
        {
            url: '#',
            title: 'Khách sạn Biên Hòa',
        },
        {
            url: '#',
            title: 'Khách sạn Bình Dương',
        },
        {
            url: '#',
            title: 'Khách sạn Buôn Ma Thuột',
        },
        {
            url: '#',
            title: 'Khách sạn Cà Mau',
        },
        {
            url: '#',
            title: 'Khách sạn Cần Thơ',
        },
        {
            url: '#',
            title: 'Khách sạn Côn Đảo',
        },
        {
            url: '#',
            title: 'Khách sạn Đà Lạt',
        },
        {
            url: '#',
            title: 'Khách sạn Đà Nẵng',
        },
        {
            url: '#',
            title: 'Khách sạn Điện Biên',
        },
        {
            url: '#',
            title: 'Khách sạn Đồng Nai',
        },
        {
            url: '#',
            title: 'Khách sạn Hà Giang',
        },
        {
            url: '#',
            title: 'Khách sạn Hạ Long',
        },
        {
            url: '#',
            title: 'Khách sạn Hà Nội',
        },
        {
            url: '#',
            title: 'Khách sạn Hà Tĩnh',
        },
        {
            url: '#',
            title: 'Khách sạn Hải Phòng',
        },
        {
            url: '#',
            title: 'Khách sạn Hồ Chí Minh',
        },
        {
            url: '#',
            title: 'Khách sạn Hội An',
        },
        {
            url: '#',
            title: 'Khách sạn Huế',
        },
        {
            url: '#',
            title: 'Khách sạn Kiên Giang',
        },
        {
            url: '#',
            title: 'Khách sạn Kon Tum',
        },
        {
            url: '#',
            title: 'Khách sạn Lai Châu',
        },
        {
            url: '#',
            title: 'Khách sạn Lân Cận Hà Nội',
        },
        {
            url: '#',
            title: 'Khách sạn Lạng Sơn',
        },
        {
            url: '#',
            title: 'Khách sạn Lào Cai',
        },
        {
            url: '#',
            title: 'Khách sạn Nghệ An',
        },
        {
            url: '#',
            title: 'Khách sạn Nha Trang',
        },
        {
            url: '#',
            title: 'Khách sạn Ninh Bình',
        },
        {
            url: '#',
            title: 'Khách sạn Ninh Thuận',
        },
        {
            url: '#',
            title: 'Khách sạn Phan Thiết',
        },
        {
            url: '#',
            title: 'Khách sạn Phú Quốc',
        },
        {
            url: '#',
            title: 'Khách sạn Phú Yên',
        },
        {
            url: '#',
            title: 'Khách sạn Pleiku',
        },
        {
            url: '#',
            title: 'Khách sạn Quảng Bình',
        },
        {
            url: '#',
            title: 'Khách sạn Quảng Nam',
        },
        {
            url: '#',
            title: 'Khách sạn Quảng Ngãi',
        },
        {
            url: '#',
            title: 'Khách sạn Quảng Trị',
        },
        {
            url: '#',
            title: 'Khách sạn Quy Nhơn',
        },
        {
            url: '#',
            title: 'Khách sạn Sapa',
        },
        {
            url: '#',
            title: 'Khách sạn Sóc Trăng',
        },
        {
            url: '#',
            title: 'Khách sạn Sơn La',
        },
        {
            url: '#',
            title: 'Khách sạn Tam Kỳ',
        },
        {
            url: '#',
            title: 'Khách sạn Tây Ninh',
        },
        {
            url: '#',
            title: 'Khách sạn Thác Đa',
        },
        {
            url: '#',
            title: 'Khách sạn Thanh Hóa',
        },
        {
            url: '#',
            title: 'Khách sạn Tiền Giang',
        },
        {
            url: '#',
            title: 'Khách sạn Vĩnh Long',
        },
        {
            url: '#',
            title: 'Khách sạn Vũng Tàu',
        },
    ];

    return (
        <div className="">
            <div className="home__header">
                <Divider />

                <Form
                    size="large"
                    className="home__header-form"
                    name="form_item_path"
                    layout="inline"
                    onFinish={onFinish}
                >
                    <Form.Item className="home__header-form-item" name="destination" label="Điểm đến">
                        <Input />
                    </Form.Item>
                    <Form.Item className="home__header-form-item" name="Check-in" label="Ngày Nhận/Trả phòng">
                        <RangePicker disabledDate={disabledDate} />
                    </Form.Item>

                    <Form.Item
                        className="home__header-form-item"
                        name="NumberRoomandGuest"
                        label="Số phòng, Số khách"
                    >
                        <CountBooking />
                    </Form.Item>
                    <Button icon={<SearchOutlined />} type="primary" htmlType="submit">
                        Tìm kiếm
                    </Button>
                </Form>
            </div>
            <div className="main">
                <Divider />
                <Row gutter={16} className="main__destination-list">
                    <Col span={24}>
                        <h3 className="heading-title">TOP ĐIỂM ĐẾN</h3>
                    </Col>
                    {FakeCard.map((data, index) => {
                        return (
                            <Col key={nanoid()} span={6} className="main__destination-list-item">
                                <Link
                                    className="linkto"
                                    to={'searchresult/1'}
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Card
                                        hoverable
                                        style={{
                                            width: '100%',
                                        }}
                                        cover={<img alt="example" src={data.url} />}
                                    >
                                        <Meta title={data.title} />
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>
                <Row gutter={16} className="main__destination-list">
                    <Col span={24}>
                        <h3 className="heading-title">TOP KHÁCH SẠN - RESORT</h3>
                    </Col>
                    {FakeCard1.map((data, index) => {
                        return (
                            <Col key={nanoid()} span={4} className="main__destination-list-item">
                                <Link
                                    className="linkto"
                                    to={'searchresult/1'}
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Card
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        <Meta
                                            title={data.title}
                                            description={
                                                <div>
                                                    {data.description
                                                        ? data.description.map((des, index) => (
                                                              <a
                                                                  className="main__destination-list-href"
                                                                  key={index}
                                                                  href={des.url}
                                                              >
                                                                  {des.title}
                                                              </a>
                                                          ))
                                                        : null}
                                                </div>
                                            }
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>

                <Row gutter={16} className="main__destination-list">
                    <Col span={24}>
                        <h3 className="heading-title">TOP KHUYẾN MÃI</h3>
                    </Col>
                    {FakeCard2.map((data, index) => {
                        console.log('data: ', data);
                        return (
                            <Col key={nanoid()} span={6} className="main__destination-list-item">
                                <Link
                                    className="linkto"
                                    to={'searchresult/1'}
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Card
                                        style={{
                                            width: '100%',
                                        }}
                                        cover={<img alt="example" src={data.url} />}
                                    >
                                        <Meta
                                            title={data.title}
                                            description={
                                                <div>
                                                    {data.description
                                                        ? data.description.map((des, index) => (
                                                              <a
                                                                  style={{ color: '#666' }}
                                                                  className="main__destination-list-href no-color"
                                                                  key={index}
                                                                  href={des.url}
                                                              >
                                                                  {des.title}
                                                              </a>
                                                          ))
                                                        : null}
                                                </div>
                                            }
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        );
                    })}
                </Row>

                <Row className="main__destination-list">
                    <Col span={24}>
                        <h3 className="heading-title">KHÁCH SẠN THEO THÀNH PHỐ</h3>
                    </Col>
                    <Col span={24}>
                        <div className="hotels-city">
                            {FakeCard3.map((data, index) => {
                                return (
                                    <a key={nanoid()} href={data.url} style={{ color: '#3598dc' }}>
                                        {data.title}
                                    </a>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default HomePage;
