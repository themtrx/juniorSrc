import React from 'react'
import Header from '../../components/header'
import style from './index.module.css'
import Footer from '../../components/footer'
import Hero from '../../components/hero'
import DescriptionSection from '../../components/description'
import Projects from '../../components/projects'

const PortfolioPage = () => {
    return(
        <>
            <Header/>
            <Hero/>
            <DescriptionSection />
            <Projects />
            <Footer/>
        </>
    )
}

export default PortfolioPage