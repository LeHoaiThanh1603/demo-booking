import { Button, Row } from 'antd'
import React from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
// import { VN } from '../../assets'

export default function Header() {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <div className='header__container'>
                <div className='header__container-nav'>
                    <Link to={'/'} className='header__heading'>CRM Booking</Link>
                    <div className='header__select'>
                        <span className='header__select-lang'>
                            {/* <img src={VN} /> */}
                            VN
                        </span>
                        <Button onClick={() => navigate('user/login')}>Register</Button>
                        <Button>Sign in</Button>
                    </div>
                </div>
                <div className='header__container-options'></div>
            </div>
        </div>
    )
}
