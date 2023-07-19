import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__about about">
                        <div className="about__title title">
                            О компании
                        </div>
                        <div className="about__list list">
                            <div className="list__item">Партнёрская программа</div>
                            <div className="list__item">Вакансии</div>
                        </div>
                    </div>
                    <div className="footer__menu menu">
                        <div className="menu__title title">
                            Меню
                        </div>
                        <div className="menu__menus menus">
                            <div className="menu__list list">
                                <div className="list__item">Расчёт стоимости</div>
                                <div className="list__item">Услуги</div>
                                <div className="list__item">Виджеты</div>
                                <div className="list__item">Интеграции</div>
                                <div className="list__item">Наши клиенты</div>
                            </div>
                            <div className="menu__list list">
                                <div className="list__item">Кейсы</div>
                                <div className="list__item">Благодарственные письма</div>
                                <div className="list__item">Сертификаты</div>
                                <div className="list__item">Блог на Youtube</div>
                                <div className="list__item">Вопрос / Ответ</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contacts">
                        <div className="contacts__title title">Контакты</div>
                        <div className="contacts__list list">
                            <div className="list__item phone">+7 555 555-55-55</div>
                            <div className="list__item">
                                <img className='item__icon' src="/img/telegram.svg" alt="" />
                                <img className='item__icon' src="/img/viber.svg" alt="" />
                                <img className='item__icon' src="/img/whatsapp.svg" alt="" />
                            </div>
                            <div className="list__item">Москва, Путевой проезд 3с1, к 902</div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className='policy-text'>©WELBEX 2022. Все права защищены.</div>
                    <a href='#' className='policy-link'>Политика конфиденциальности</a>
                </div>

            </div>
        </footer>
    )
}

export default Footer