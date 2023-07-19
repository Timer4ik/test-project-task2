import React, { FC, ReactNode } from 'react'
import BackgroundElements from './base/BackgroundElements'
import Header from './base/Header'
import Footer from './base/Footer'

const DefaultLayout: FC<{
    children: ReactNode
}> = ({ children }) => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer/>
            <BackgroundElements/>
        </div>
    )
}

export default DefaultLayout