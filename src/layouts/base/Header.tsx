import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src="/img/logo.png" alt="" />
                        </div>
                        <div className="header__nav desktop">
                            <a href="#" className="nav__link">Услуги</a>
                            <a href="#" className="nav__link">Виджеты</a>
                            <a href="#" className="nav__link">Интеграции</a>
                            <a href="#" className="nav__link">Кейсы</a>
                            <a href="#" className="nav__link">Сертификаты</a>
                        </div>
                        <div className="header__nav mobile">
                            <a href="#" className="nav__link">Услуги</a>
                            <a href="#" className="nav__link">Виджеты</a>
                            <a href="#" className="nav__link">Интеграции</a>
                            <a href="#" className="nav__link">Кейсы</a>
                        </div>
                    </div>

                    <div className="header__contacts">
                        <div className="contacts__number">
                            +7 555 555-55-55
                        </div>
                        <div className="contacts__icons">
                            <a className='icons__icon' href="#">
                                <img src="/img/telegram.svg" alt="" />
                            </a>
                            <a className='icons__icon' href="#">
                                <img src="/img/viber.svg" alt="" />
                            </a>
                            <a className='icons__icon' href="#">
                                <img src="/img/whatsapp.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header