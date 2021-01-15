import React from 'react'
import style from './index.module.css'
import {Col} from 'react-bootstrap'


const ProjectCard = (props) => {
    return (
        <>
            <Col className={style['project-element']} md={4}>
                <figure className={style.figure}>
                    <img src={props.imgURL} alt={props.alt}/>
                    <figcaption className={style.figcaption}>
                        <h4>{props.description}</h4>
                        {props.buttonURL?<a href={props.buttonURL} target="_blank">Check it</a>: null}
                    </figcaption>
                    <div className={style.overlay}></div>
                </figure>
            </Col>
        </>
    )
}

export default ProjectCard