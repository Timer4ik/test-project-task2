import React from 'react'

const TimerPage = () => {
  return (
    <div className='welbex'>
      <div className="container">
        <div className="welbex__inner">

          <div className="welbex__left">
            <h1 className="left__title">Зарабатывайте больше</h1>
            <div className="left__subtitle">с WELBEX</div>
            <div className="left__text">
              Развиваем и контролируем продажи за вас
            </div>
          </div>
          <div className="welbex__right">
            <div className="right__title">
              Вместе с <span className='title__gradient'>бесплатной</span> <span className='title__gradient'>консультацией</span> мы дарим:
            </div>
            <div className="right__gifts mobile">
              <div className="gifts__item">
                <div className="item__title"><span className='gradient'></span> Skype Аудит</div>
              </div>
              <div className="gifts__item">
                <div className="item__title"><span className='gradient'></span> 30 Виджетов</div>
              </div>
              <div className="gifts__item">
                <div className="item__title"><span className='gradient'></span> Dashboard</div>
              </div>
              <div className="gifts__item">
                <div className="item__title"><span className='gradient'></span> месяц amocrm</div>
              </div>
            </div>
            <div className="right__gifts desktop">
              <div className="gifts__item">
                <div className="item__title">Виджеты</div>
                <div className="item__text">30 готовых решений</div>
              </div>
              <div className="gifts__item">
                <div className="item__title">Dashboard</div>
                <div className="item__text">с показателями вашего бизнеса</div>
              </div>
              <div className="gifts__item">
                <div className="item__title">Skype Аудит</div>
                <div className="item__text">отдела продаж и CRM системы</div>
              </div>
              <div className="gifts__item">
                <div className="item__title">35 дней</div>
                <div className="item__text">использования CRM</div>
              </div>
            </div>
            <div className="right__button">
              <button type='button' className="button__consult">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerPage