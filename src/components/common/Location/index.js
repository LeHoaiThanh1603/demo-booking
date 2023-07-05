import React from 'react'
import './index.scss'
import { ImLocation } from 'react-icons/im'
import { Button, Col, Row } from 'antd'
export default function Location() {
    return (
        <div className='locationWraper'>
            <h3>Thông tin địa điểm</h3>
            <div className='locationWraper__address'>
                <ImLocation />
                Lot R2 03-04. Golf Valley, Ward 2, Đà Lạt, Việt Nam
            </div>
            <div className="locationWrapper__map">
                <iframe
                    title='Google Maps'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.2215015459!2d108.44011261187913!3d11.95916048822197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112db28936b91%3A0xfd62f3a195e4a387!2zNDggxJDGsOG7nW5nIFBow7kgxJDhu5VuZyBUaGnDqm4gVsawxqFuZywgUGjGsOG7nW5nIDgsIFRow6BuaCBwaOG7kSDEkMOgIEzhuqF0LCBMw6JtIMSQ4buTbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681443219503!5m2!1svi!2s'
                    width='100%'
                    // height='160'
                    frameBorder='0'
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>

            <div className="locationWraper__description">
                <Row>
                    <Col span={12}>
                        <div className=' 
                        locationWraper__description-border
                        locationWraper__description-wrapper'>
                            <h3>
                                Địa điểm lân cận
                            </h3>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>

                        </div>
                    </Col>
                    <Col span={12}>
                        <div className='locationWraper__description-wrapper' >
                            <h3>
                                Phổ biến trong khu vực
                            </h3>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>
                            <div className="locationWraper__description-item">
                                <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/04/04/1554360805683-5899121c8828f597fdd407909d2d3d73.png?tr=h-24,q-75,w-24" alt="" />
                                <div className="locationWraper__description-title">
                                    <span>Bãi Sau</span>
                                    <span>Thiên nhiên</span>
                                </div>
                                <span className="locationWraper__description-distance">530 m</span>
                            </div>

                        </div>
                    </Col>
                    <Col span={24}>
                        <p className='locationWraper__description-explain'>Khoảng cách thể hiện được tính theo đường chim bay. Khoảng cách di chuyển thực tế có thể thay đổi.</p>
                    </Col>
                </Row>
            </div>
            <Button className='btn-gotoMap'>Khám phá thêm địa điểm trên bản đồ</Button>
        </div>
    )
}
