import React, { useState } from 'react';
import { Button, Col, Collapse, Image, Input, InputNumber, Progress, Rate, Row, Slider } from 'antd';
import { nanoid } from 'nanoid';
import './QuestionsAndRatings.scss';
import { BsReplyFill } from 'react-icons/bs';
import TextArea from 'antd/es/input/TextArea';
import { useRef } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const { Panel } = Collapse;

const dataQuestions = [
    {
        question: 'Khách sạn có đưa đón miễn phí từ SG không?',
        reply: `Melia Ho Tram có dịch vụ đưa đón miễn phí từ TP.HCM theo lịch trình:
                - TP.HCM - Resort: khởi hành các khung giờ 14:00 (T2 - CN), 20:00 (T7 - CN)
                - Resort - TP.HCM: khởi hành các khung giờ 11:00 (T2 - CN), 17:00 (T7 - CN)
                Xe đưa đón tập trung tại PJ's Coffee - Sala Store, 147 Nguyễn Cơ Thạch, An Lợi Đông, Quận 2, Tp.HCM. Quý khách vui lòng đăng kí trước với lễ tân để được phục vụ tốt nhất.`,
    },
    {
        question: 'Melia Ho Tram cung cấp những dịch vụ tiện ích nào?',
        reply: `Melia Hồ Tràm Beach Resort cung cấp những dịch vụ tiện ích sau: Hồ bơi (gồm 3 hồ bơi ngoài trời), khu vui chơi trẻ em (có trong nhà lẫn ngoài trời), xe điện di chuyển nội khu, spa, phòng tập thể dục, các hoạt động thể thao ngoài trời (bóng chuyền, bóng rổ dưới nước,...), các lớp học (vẽ nón lá, lướt ván, làm đèn lồng,...) và cửa hàng lưu niệm.`,
    },
    {
        question: 'Những tiện ích miễn phí khi đặt Biệt thự (The Level) ở Melia Hồ Tràm Beach Resort?',
        reply: `Quý khách khi đặt hạng phòng Biệt thự ở Melia Ho Tram sẽ được hưởng những tiện ích miễn phí sau:
                - Cocktail, đồ uống có cồn và món ăn nhẹ tự chọn (phục vụ theo giờ).
                - Miễn phí vào The Level Lounge.
                - Miễn phí máy pha cà phê viên nén và quầy trà trong phòng.
                - Miễn phí sử dụng phòng họp tại The Level Lounge trong 3 tiếng.
                - Miễn phí 1 lượt xông hơi.
                - Hồ bơi riêng với giường tắm nắng và dù che,...`,
    },
    {
        question: 'Thời gian nhận phòng và trả phòng ở Melia Ho Tram?',
        reply: `Melia Hồ Tràm Beach Resort có giờ nhận phòng từ 16:00 và trả phòng đến 12:00.
                Nếu Quý khách có nhu cầu nhận phòng sớm hay trả phòng muộn thì sẽ tùy theo công suất phòng của khách sạn và phải trả thêm phụ phí theo quy định.`,
    },
    {
        question: 'Melia Hồ Tràm Beach Resort có biệt thự cho gia đình không?',
        reply: `Melia Ho Tram có các hạng phòng dành cho gia đình là:
                - Dành cho 4 người: Suite 02 Phòng Ngủ, Suite Gia Đình, Biệt thự 02 phòng ngủ có hồ bơi riêng.
                - Dành cho 6 người: Biệt thự 03 phòng ngủ có hồ bơi riêng, Biệt thự 03 phòng ngủ trước biển có hồ bơi riêng.
                - Dành cho 8 người: Biệt thự 04 phòng ngủ trước biển có hồ bơi riêng.`,
    },
];
const IntegerStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    return (
        <Row className="rowStep">
            <Col span={12}>
                <label>Vị trí</label>

                <Slider
                    min={0}
                    step={10}
                    max={100}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={0}
                    max={100}
                    style={{
                        margin: '0 16px',
                    }}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

const QuestionsAndRatings = () => {
    const [openIndex, setOpenIndex] = useState(false);
    const [displayCount, setDisplayCount] = useState(3);
    const fakeData = [1, 2, 3, 4, 5, 6, 7, 8];
    const [value, setValue] = useState('');

    const handleItemClick = (index) => {
        if (openIndex === index) {
            setOpenIndex(false); // Nếu click vào item đã mở, đóng box bằng cách đặt openIndex là null
        } else {
            setOpenIndex(index); // Nếu click vào item chưa mở, mở box của item đó
        }
    };
    const handleLoadMore = () => {
        if (displayCount >= fakeData.length - 1) {
            setDisplayCount(3);
            console.log('lọt vào');
        } else {
            setDisplayCount((prevCount) => prevCount + 3);
        }
    };
    // Create array with 500 slides
    // install Virtual module
    SwiperCore.use([Virtual, Navigation, Pagination]);
    const [slides, setSlides] = useState(Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`));
    const dataSlider = [
        'https://du-lich.chudu24.com/f/m/2303/14/2dfeec4f-3215-4b2e-9420-5d3bcef195fa.jpeg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2303/14/8bc5811c-d780-4a40-895f-753d4b0ebcbb.jpeg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2206/12/75997eef-f287-4749-bda1-f21645f58216.jpeg?w=800&c=1',
        '	https://du-lich.chudu24.com/f/m/2206/02/cb37d38f-2ebd-4548-8695-9e9a582a57ff.jpeg?w=800&c=1',
        '	https://du-lich.chudu24.com/f/m/2206/02/e2058cab-9dbb-4c2d-bdb6-96ae4806f42f.jpeg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2205/01/makeup-2022042610552494.jpg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2204/25/e497e557-f783-4bef-9301-86646a50b663.jpeg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2202/13/2fbbd0ea-1e50-47b4-8aea-ea0cd003806c.jpeg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2105/03/20210422-132541.jpg?w=800&c=1',
        '	https://du-lich.chudu24.com/f/m/2105/03/20210422-174026.jpg?w=800&c=1',
        'https://du-lich.chudu24.com/f/m/2105/03/20210422-124452.jpg?w=800&c=1',
    ];

    return (
        <div>
            <div className="question">
                <div className="question__heading">
                    <h3>Những câu hỏi thường gặp</h3>
                </div>
                <Collapse accordion>
                    {dataQuestions.map((item, i) => (
                        <Panel header={item.question} key={nanoid()}>
                            <p>{item.reply}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>

            <div className="ratings">
                <div className="ratings__heading">
                    <h3>Những câu hỏi thường gặp</h3>
                    <div className="ratings__header">
                        <div className="ratings__header-title">
                            <strong>1.474 khách hàng</strong> của Chudu24 đã đánh giá khách sạn này
                        </div>
                        <div className="ratings__header-box">
                            <div className="ratings__header-box__left">
                                <div className="ratings__header-box__left-quantity">
                                    <strong>9.2</strong>/10
                                </div>
                                <div className="ratings__header-box__left-allrate">1.232 đánh giá</div>
                                <Rate disabled value={5} style={{ fontSize: 14, marginLeft: '6px' }} />
                            </div>
                            <div className="ratings__header-box__right">
                                <ul className="ratings__header-box__right-list">
                                    <li className="ratings__header-box__right-item">
                                        <span>ĐÁNG TIỀN</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                    <li className="ratings__header-box__right-item">
                                        <span>ĐỒ ĂN</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                    <li className="ratings__header-box__right-item">
                                        <span>NHÂN VIÊN</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                    <li className="ratings__header-box__right-item">
                                        <span>PHÒNG</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                    <li className="ratings__header-box__right-item">
                                        <span>SẠCH SẼ</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                    <li className="ratings__header-box__right-item">
                                        <span>VỊ TRÍ</span>
                                        <Rate
                                            disabled
                                            value={4.5}
                                            style={{ fontSize: 14, marginLeft: '6px' }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ratings__nav">
                        {/* <Button>Nhận xét</Button> */}
                        <Collapse size="small" style={{ marginTop: '20px' }}>
                            <Panel header="Viết nhận xét" key="1">
                                <div className="ratings__nav-evaluate">
                                    {/* <h5 style={{ marginBottom: '10px' }}>Nhận xét</h5> */}
                                    <TextArea
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder="Nhận xét về chúng tôi..."
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 5,
                                        }}
                                    />
                                    <div className="ratings__nav-evaluate__range">
                                        <IntegerStep />
                                        <IntegerStep />
                                        <IntegerStep />
                                        <IntegerStep />
                                        <IntegerStep />
                                        <IntegerStep />
                                        <IntegerStep />
                                    </div>

                                    <div className="">
                                        <Button type="primary">Gửi đánh giá</Button>
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                        <div className="ratings__header-title">
                            <div style={{ marginBottom: '10px' }}>Hình Ảnh từ Khách Hàng</div>
                            <div className="ratings__nav-imgs">
                                <Swiper
                                    className="swiper-container"
                                    // onSwiper={setSwiperRef}
                                    slidesPerView={10}
                                    centeredSlides={false}
                                    spaceBetween={10}
                                    // pagination={{
                                    //     type: 'fraction',
                                    // }}
                                    navigation={true}
                                    virtual
                                >
                                    <Image.PreviewGroup
                                        style={{ width: '100%' }}
                                        preview={{
                                            onChange: (current, prev) =>
                                                console.log(`current index: ${current}, prev index: ${prev}`),
                                        }}
                                    >
                                        {dataSlider.map((slideContent, index) => (
                                            <SwiperSlide
                                                key={slideContent}
                                                virtualIndex={index}
                                                className="img-wraper"
                                            >
                                                <Image
                                                    style={{
                                                        display: 'block',
                                                        maxHeight: '100px',
                                                        height: '100px',
                                                        width: '100%',
                                                        maxWidth: '100%',
                                                    }}
                                                    src={slideContent}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Image.PreviewGroup>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {console.log(displayCount)}
                    {fakeData.slice(0, displayCount).map((item, index) => (
                        <div className="comments" key={index}>
                            <div className="comments__left">
                                <div className="comments__left-name">Lê Hoài Thanh</div>
                                <div className="comments__left-date">16/03/2023</div>
                            </div>
                            <div className="comments__center">
                                <div className="comments__center-title">Buffet sáng ngon</div>
                                <div className="comments__center-content">
                                    "2 đêm lưu trú tại Melia Ho Tram, gia đình mình cảm thấy rất thoải mái,
                                    bãi biển đẹp, sạch, phòng ốc sạch sẽ thoáng, nhân viên thân thiện. Tuy
                                    nhiên, nếu điều chỉnh giá ăn uống xuống cho phù hợp thì quá tuyệt. Do giá
                                    bữa ăn chênh lệch với bên ngoài quá nhiều, nên khách sẽ ra ngoài ăn. Nhưng
                                    nhìn chung thì dịch vụ ở đây rất tốt, mảng xanh nhiều, xứng đáng là khu
                                    nghỉ dưỡng đẳng cấp."
                                </div>
                                <ul className="comments__center-des">
                                    <li className="comments__center-des__item">
                                        <span>Vị Trí</span>
                                        <Progress showInfo={false} percent={100} size="large" />
                                    </li>
                                    <li className="comments__center-des__item">
                                        <span>Sạch Sẽ</span>
                                        <Progress showInfo={false} percent={100} size="large" />
                                    </li>
                                    <li className="comments__center-des__item">
                                        <span>Đồ Ăn</span>
                                        <Progress showInfo={false} percent={90} size="large" />
                                    </li>
                                    <li className="comments__center-des__item">
                                        <span> Phòng</span>
                                        <Progress showInfo={false} percent={100} size="large" />
                                    </li>
                                    <li className="comments__center-des__item">
                                        <span>Nhân Viên</span>
                                        <Progress showInfo={false} percent={100} size="large" />
                                    </li>
                                    <li className="comments__center-des__item">
                                        <span>Đáng Tiền</span>
                                        <Progress showInfo={false} percent={80} size="large" />
                                    </li>
                                </ul>
                                <div className={`reply ${openIndex === index ? 'unlock' : ''} `}>
                                    <div className={`sub-reply  `}>
                                        <div className="sub-reply__email">
                                            <div className="">Email của cơ sở lưu trú</div>
                                            <Input />
                                        </div>
                                        <div className="sub-reply__content">
                                            <div className="">Nội dung trả lời</div>
                                            <TextArea style={{ height: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments__right">
                                <div className="comments__right-title">10/10</div>
                                <div className="comments__right-rate">
                                    <Rate disabled value={5} />
                                </div>
                                <div className="comments__right-reply" onClick={() => handleItemClick(index)}>
                                    <BsReplyFill />
                                    trả lời
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="ratings__footer" onClick={handleLoadMore}>
                        {displayCount >= fakeData.length - 1 ? 'ẩn bớt đi' : ' Hiển thêm 3 đánh giá'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsAndRatings;
