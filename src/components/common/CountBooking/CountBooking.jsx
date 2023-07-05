import React, { useEffect, useRef, useState } from 'react';
import { ADULT } from '../../../constant/common';
import { Button } from 'antd';
import './CountBooking.scss';

function CountBooking() {
    const [activeOptionCount, setActiveOptionCount] = useState(false);
    const headingRef = useRef(null);

    const [valueAdult, setValueAdult] = useState(0);
    const [valueChild, setValueChild] = useState(0);
    const [valueRoom, setValueRoom] = useState(0);

    const clickToggle = (event) => {
        event.stopPropagation();
        const element = document.querySelector('.count__boxCount');
        const parent = document.querySelector('.count');
        const doneBtn = document.querySelector('.count__boxCount-doneBtn');

        if (doneBtn && doneBtn.contains(event.target)) {
            setActiveOptionCount(false);
        } else if (parent && parent.contains(event.target)) {
            setActiveOptionCount(true);
        }
        // else if (element && !element.contains(event.target)) {
        //     console.log('2');

        //     setActiveOptionCount(false);
        // }
    };

    useEffect(() => {
        document.addEventListener('click', clickToggle);
        return () => {
            document.removeEventListener('click', clickToggle);
        };
    }, []);

    const handleShowOptionCount = () => {
        setActiveOptionCount((prev) => !prev);
    };

    const handleCountChange = (countType, operation) => {
        switch (countType) {
            case ADULT:
                if (operation === 'increment') {
                    setValueAdult((prev) => prev + 1);
                } else if (operation === 'decrement') {
                    setValueAdult((prev) => prev - 1);
                }
                break;
            case 'child':
                if (operation === 'increment') {
                    setValueChild((prev) => prev + 1);
                } else if (operation === 'decrement') {
                    setValueChild((prev) => prev - 1);
                }
                break;
            case 'room':
                if (operation === 'increment') {
                    setValueRoom((prev) => prev + 1);
                } else if (operation === 'decrement') {
                    setValueRoom((prev) => prev - 1);
                }
                break;
            default:
                break;
        }
    };

    const handleCountBoxClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className="count" onClick={handleShowOptionCount}>
            <span
                ref={headingRef}
            >{`${valueAdult} người lớn - ${valueChild} trẻ em - ${valueRoom} phòng`}</span>
            <div className={`count__boxCount ${activeOptionCount && 'active'} `}>
                <div className="count__boxCount-item" onClick={handleCountBoxClick}>
                    <span>Người lớn</span>
                    <div className="count__boxCount-quantity">
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange(ADULT, 'decrement')}
                        >
                            -
                        </div>
                        <div className="count__boxCount-value">{valueAdult}</div>
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange(ADULT, 'increment')}
                        >
                            +
                        </div>
                    </div>
                </div>

                <div className="count__boxCount-item" onClick={handleCountBoxClick}>
                    <span>Trẻ em</span>
                    <div className="count__boxCount-quantity">
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange('child', 'decrement')}
                        >
                            -
                        </div>
                        <div className="count__boxCount-value">{valueChild}</div>
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange('child', 'increment')}
                        >
                            +
                        </div>
                    </div>
                </div>

                <div className="count__boxCount-item" onClick={handleCountBoxClick}>
                    <span>Phòng</span>
                    <div className="count__boxCount-quantity">
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange('room', 'decrement')}
                        >
                            -
                        </div>
                        <div className="count__boxCount-value">{valueRoom}</div>
                        <div
                            className="count__boxCount-btn"
                            onClick={() => handleCountChange('room', 'increment')}
                        >
                            +
                        </div>
                    </div>
                </div>
                <Button className="count__boxCount-doneBtn" type="primary">
                    Xong
                </Button>
            </div>
        </div>
    );
}

export default CountBooking;
