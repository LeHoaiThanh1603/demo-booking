import React, { useState } from 'react';
import useToggle from '../../../../hooks/useToggle';
import { Button, Rate, Select } from 'antd';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Label from '../../../../components/common/Label/Label';
import './ListHotel.scss';
import { Link } from 'react-router-dom';
const ListHotel = () => {
    const [toggleSave, setToggleSave] = useToggle(false);

    const handleToggleSave = () => {
        setToggleSave();
    };

    return (
        <div className="searchresult">
            <div className="searchresult-content">
                <div className="searchresult-content__wrapper">
                    <div className="searchresult-content__wrapper--img">
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/square200/439144899.webp?k=36ebb35f52ae8196416b664715b115b8513e0cebe2cba620b3d8f36d724c12d9&o=&s=1"
                            alt=""
                        />
                        <span className="searchresult-content__wrapper--img-child">
                            {toggleSave ? (
                                <AiFillHeart
                                    className="contentWraper-nav__icon"
                                    onClick={handleToggleSave}
                                    color="red"
                                />
                            ) : (
                                <AiOutlineHeart
                                    className="contentWraper-nav__icon"
                                    onClick={handleToggleSave}
                                    color="white"
                                />
                            )}
                        </span>
                    </div>
                    <div className="searchresult-content__wrapper--describe">
                        <div className="searchresult-content__wrapper--describecontent">
                            <Label title="Căn hộ" background="#003580" color="#fff" />
                            <div className="searchresult-content__wrapper--describecontent-name">
                                <h2>
                                    Vias Hotel Vung Tau
                                    <Rate
                                        disabled
                                        style={{
                                            marginLeft: 5,
                                            fontSize: '14px',
                                            transform: 'translateY(-2px)',
                                        }}
                                        value={5}
                                    />
                                </h2>
                            </div>
                            <div className="searchresult-content__wrapper--describecontent-location">
                                <p>Vũng tàu</p>
                                <p>Xem trên bản đồ</p>
                                <p>Cách trung tâm 1,3km</p>
                            </div>
                            <Label
                                title="Giáp biển"
                                icons={[
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M.153 22.237l.85 1.117c.634.76 1.724.856 2.456.244.078-.066.15-.138.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.161 7.161 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.673 8.673 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.729 1.729 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.536 10.536 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.229.229 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883l2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492z"></path>
                                    </svg>,
                                ]}
                            />
                            <Label
                                title="Du lịch Bền vững Cấp 3"
                                color="#008009"
                                background="#e7fde9"
                                icons={[
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
                                        <path d="M59.114 77.973c13.595-12.765 29.61-60.64 23.626-66.555-6.019-6.088-53.686 9.893-67.35 23.384-10.689 10.585-11.346 29.68-1.487 40.784l42.236-42.064c1.315-1.28 3.079-1.107 4.047-.138 1.004.968 1.453 2.802-.138 4.324L21.409 76.174 9.752 87.797l-.415.415c-.277.276-.45.553-.554.9-.38 1.002-.173 2.213.623 3.009 1.107 1.141 2.94 1.141 4.082 0l9.27-9.202c11.623 6.434 25.91 4.878 36.356-4.946Z"></path>
                                    </svg>,
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
                                        <path d="M59.114 77.973c13.595-12.765 29.61-60.64 23.626-66.555-6.019-6.088-53.686 9.893-67.35 23.384-10.689 10.585-11.346 29.68-1.487 40.784l42.236-42.064c1.315-1.28 3.079-1.107 4.047-.138 1.004.968 1.453 2.802-.138 4.324L21.409 76.174 9.752 87.797l-.415.415c-.277.276-.45.553-.554.9-.38 1.002-.173 2.213.623 3.009 1.107 1.141 2.94 1.141 4.082 0l9.27-9.202c11.623 6.434 25.91 4.878 36.356-4.946Z"></path>
                                    </svg>,
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
                                        <path d="M59.114 77.973c13.595-12.765 29.61-60.64 23.626-66.555-6.019-6.088-53.686 9.893-67.35 23.384-10.689 10.585-11.346 29.68-1.487 40.784l42.236-42.064c1.315-1.28 3.079-1.107 4.047-.138 1.004.968 1.453 2.802-.138 4.324L21.409 76.174 9.752 87.797l-.415.415c-.277.276-.45.553-.554.9-.38 1.002-.173 2.213.623 3.009 1.107 1.141 2.94 1.141 4.082 0l9.27-9.202c11.623 6.434 25.91 4.878 36.356-4.946Z"></path>
                                    </svg>,
                                ]}
                            />
                            <p className="description">
                                Offering city views, Căn hộ the Sóng Vũng Tàu - Your Homestay in Vung Tau
                                offers accommodation, an outdoor swimming pool, a fitness centre, a garden, a
                                shared lounge and a terrace.
                            </p>
                        </div>
                        <div className="rate">
                            <div className="rate-ratecontent">
                                <div className="rate-ratecontent__value">
                                    <div>Tuyệt hảo</div>
                                    <span>18 đánh giá</span>
                                </div>
                                <Label title={'9,2'} background="#003580" color="#fff" />
                            </div>
                            <Label title="Mới trên Booking.com" background="#febb02" />
                            <Link to={'/detail/1'}>
                                <Button type="primary">Hiển thị giá</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListHotel;
