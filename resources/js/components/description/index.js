import React from 'react'
import style from './index.module.css'
import {Container, Jumbotron} from 'react-bootstrap'
import Skills from '../skills'

const DescriptionSection = () => {
    return (
        <>
            <section className={style['descript-section']}>
                <Jumbotron fluid className={style.jumbotron}>
                    <Container>
                        <p>
                            I love art in all its forms and programming is one of those forms. Art is a way to express yourself.
                            It doesn't matter if you are part of symphonic orchestra or a development team. Every member leaves peace of his soul and heart in the final product.
                            It doesn't matter what tools you are using - paint, gypsum, violin or JavaScript. 
                            What matters are the emotions people experience by looking at your picture, touching your statue, listening your music or using your app.
                        </p>
                        <h3>Dimitar Dimitrov</h3>
                    </Container>
                </Jumbotron>
                <Skills/>
            </section>
        </>
    )
}

export default DescriptionSection