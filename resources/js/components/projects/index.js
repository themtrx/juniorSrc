import React from 'react'
import style from './index.module.css'
import {Container, Row} from 'react-bootstrap'

import projetsList from '../../utils/projectsList'
import ProjectCard from '../projectCard'

const Projects = () => {

    const renderProjects = () => {
        return projetsList.map((project, i) => {
            return (
                <ProjectCard 
                key={i}
                imgURL={project.imgURL}
                description={project.description}
                buttonURL={project.buttonURL}
                alt={project.alt}
                />
            )
        })
        
    }

    return (
        <>
            <section className={style.section}>
                <h3>My Work</h3>
                <p>You can check some of my own projects here</p>
                <article className={style.article}>
                    <Container>
                        <Row lg={3} className="justify-content-md-center">
                            {renderProjects()}
                        </Row>
                    </Container>
                </article>
            </section>
        </>
    )
}

export default Projects