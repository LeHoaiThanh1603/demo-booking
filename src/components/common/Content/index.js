import { Avatar, Button, Col, Modal, Rate, Row } from 'antd';
import { nanoid } from 'nanoid';
import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { HiOutlineChevronLeft, HiShare } from 'react-icons/hi';
import ImageGallery from 'react-image-gallery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import './index.scss';



export default function Content() {

    const [toggleSave, setToggleSave] = useToggle(false)
    // const [openModal, setOpenModal] = useState(false);
    const [openLibrary, setOpenLibrary] = useToggle(false)
    const [isModalOpen, setIsModalOpen] = useToggle(false);
    // const [selectIndexImage, setSelectIndexImage] = useState(0)

    const handleToggleSave = () => {
        setToggleSave()
    }

    const LabelElement = ({ title, color, bgColor, stars }) => {
        return (
            <>
                <span className='lable' style={{ color: color, background: bgColor }}>{title}</span>
                {stars && <Rate className="my-rating" style={{ fontSize: 16 }} value={3} disabled />}
            </>
        )
    }

    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605354.jpg?k=ae420689441bae26e7875787e2285cffe5246d9cfb6ade1be6c3022d7a9fd17e&o=&hp=1',

        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605567.jpg?k=9706ce76a8054613f6b02568af65fca39a50b86b1e1a8006efa07aab85308f08&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605588.jpg?k=63e46ae36cfadf4b62415c9214f9619160c09e216b78cbced50f76018259d53c&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606316.jpg?k=00bb2836265ada9265b2c731390d0554c0a044162eda9d6c66334a028c606f13&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402607873.jpg?k=57301a40c200dd3de68e271bf9c1f256d19dfc8b9187812ffd31cb673a9aed85&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605763.jpg?k=a95446536329dc9355f91f12d2ab9d7263219122a621c2b0c5b9bf125041f671&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605742.jpg?k=f7449d89eedc98506d87a690c5be7d9da7d09eb55ab157b08a3fedd22362674b&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402607092.jpg?k=e67bf4a27b2ea8136d35cc41472f64605c452b633f753a2332489d6d8f9def6e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605759.jpg?k=287fca81c1f8b2e71182edbfa2a1536b7adf25bd2ad6bf3126ed3492049a7ac3&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605608.jpg?k=22261eaa18953a611db8bf79f25c4f3788f1f1749475432d639b37cdc2094d63&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1'
        ,
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605763.jpg?k=a95446536329dc9355f91f12d2ab9d7263219122a621c2b0c5b9bf125041f671&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605742.jpg?k=f7449d89eedc98506d87a690c5be7d9da7d09eb55ab157b08a3fedd22362674b&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402607092.jpg?k=e67bf4a27b2ea8136d35cc41472f64605c452b633f753a2332489d6d8f9def6e&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605759.jpg?k=287fca81c1f8b2e71182edbfa2a1536b7adf25bd2ad6bf3126ed3492049a7ac3&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402605608.jpg?k=22261eaa18953a611db8bf79f25c4f3788f1f1749475432d639b37cdc2094d63&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1'
    ];

    const carosel = [
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/402606986.jpg?k=e429c2d96ce74fe4a435c82af941249c8ec84287414e96c7e3d38a49a2df199a&o=&hp=1',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },

    ];


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setOpenLibrary(false)
        setIsModalOpen(false);
    };
    return (

        <div className='contentWraper'>
            <div className="contentWraper-nav">
                <div className="contentWraper-nav__lable">
                    <LabelElement title='Khách sạn' color='#fff' bgColor='#7f7f7f' stars={3} />
                    <LabelElement title='Xe đưa đón sân bay' bgColor='#eee' />
                </div>
                <div className="contentWraper-nav__options">
                    <span>
                        <AiFillHeart className='contentWraper-nav__icon' onClick={handleToggleSave} color={toggleSave ? 'red' : ''} />

                    </span>
                    <span>
                        <HiShare className='contentWraper-nav__icon' />
                    </span>
                    <Button type='primary'>
                        <Link to={'/book-room'}>Đặt ngay</Link>
                    </Button>
                </div>
            </div>
            <div className="contentWraper-gallery">
                <div className="contentWraper-gallery__info">
                    <h3>Wind Hotel</h3>
                    {/* <button onClick={() => i18n.changeLanguage('en')}>Click</button> */}
                    <p>
                        <GoLocation color="#0077CC" style={{ marginRight: '3px', fontSize: '18px' }} />
                        <span>Lot R2 03-04. Golf Valley, Ward 2, Đà Lạt, Việt Nam</span>
                        <span className="contentWraper-gallery__info--strong">
                            Vị trí tuyệt vời - Hiển thị bản đồ
                        </span>
                    </p>
                </div>
                <div className="contentWraper-gallery__main">
                    <div className="contentWraper-gallery--top">

                        <div className="div1" style={{ backgroundImage: `url(${images[0]})` }} onClick={showModal}></div>
                        <div className="div2" style={{ backgroundImage: `url(${images[1]})` }} onClick={showModal}></div>
                        <div className="div3" style={{ backgroundImage: `url(${images[2]})` }} onClick={showModal}></div>
                    </div>
                    <div className="contentWraper-gallery--bt">
                        {[...images]?.splice(3, 6).map((image, i) =>
                            i !== 4 ? (
                                <div className="div1" key={i} style={{ backgroundImage: `url(${image})` }} onClick={showModal}></div>
                            ) : (
                                <div
                                    onClick={showModal}
                                    className="the-last"
                                    key={i}
                                    style={{ backgroundImage: `url(${image})` }}
                                >
                                    <span className='lastImg'>+{images.length} ảnh</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
            {
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width='100%' style={{ top: 20 }} footer={null} >
                    <div className="wrapper">
                        <Row style={{ height: '100%' }}>
                            <Col span={24}>
                                <div className="btn">
                                    {
                                        openLibrary &&
                                        <div className="btn-back" onClick={() => setOpenLibrary(false)}>
                                            <Button icon={<HiOutlineChevronLeft />}>Thư viện ảnh</Button>

                                        </div>
                                    }
                                    <div className="btn-booking">
                                        <h4>{`Dalat Wind contentWraper`}</h4>
                                        <Button type='primary' >Đặt ngay</Button>
                                    </div>
                                </div>
                            </Col>
                            {
                                openLibrary ?
                                    <Col style={{ height: '100%' }} span={18}>
                                        <ImageGallery items={carosel} />
                                    </Col>
                                    :
                                    <Col style={{ height: '100%' }} span={18}>
                                        <div className="preview">
                                            <div className="preview__container">
                                                <div className="preview__images">
                                                    {carosel.map((image, i) => (

                                                        <div title={image.original} key={nanoid()} className="preview__image">
                                                            <LazyLoadImage
                                                                onClick={() => {
                                                                    // setSelectIndexImage(i)
                                                                    setOpenLibrary(true)
                                                                }}
                                                                alt={'ghj'}
                                                                height={'100%'}
                                                                src={image.original} // use normal <img> attributes as props
                                                                width={'100%'} effect='blur' />

                                                            {/* <div style={{ backgroundImage: `url(${image.original})` }} className="preview__img"
                                                                onClick={() => {
                                                                    setSelectIndexImage(i)
                                                                    setOpenLibrary(true)
                                                                }}
                                                            ></div> */}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                            }
                            <Col style={{ height: '100%' }} span={6}>
                                <div className="rating-star">
                                    <span title='dattttttttt'>8.4</span>
                                    <div className="">
                                        <h3>Rất tốt</h3>
                                        <p>340 đánh giá</p>
                                    </div>
                                </div>
                                <div className="rating">

                                    <div className="rating__ctn">
                                        <div className="rating-comments">
                                            <h4>Điều khách yêu thích nhất:</h4>
                                            <ul className="rating-comments__list">
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>
                                                <li className="rating-comments__item">
                                                    <p>“phòng sạch đẹp. nhân viên lễ tân dễ thương, vị trí trung tâm nhưng lại rất yên tĩnh.”</p>
                                                    <div className="">
                                                        <Avatar size={20} /> Hieu
                                                        - Việt Nam
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal>
            }
        </div>
    )
}
