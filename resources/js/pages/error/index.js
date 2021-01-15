import React from 'react'
import style from './index.module.css'
import ErrorPic from '../../img/404.svg'
import Header from '../../components/header'
import Footer from '../../components/footer'

const ErrorPage = () => {
    return (
        <>
            <Header/>
            <section className={style['error-section']}>
                <img src={ErrorPic} alt="Page not found"/>
            </section>
            <Footer/>
        </>
    )
}

export default ErrorPage