import React from 'react'
import style from './index.module.css'
import heroImg from '../../img/coding.svg'

const Hero = () => {
    return (
        <>
            <section className={style.section}>
                <h1>JavaScript Developer</h1>
                <h2>The complex ideas require simple code</h2>
                <img src={heroImg} className={style['hero-img']} alt="Coder walking img"/>
            </section>
        </>
    )
}

export default Hero