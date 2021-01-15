import React from 'react'
import style from './index.module.css'
import articleImg from '../../img/programming.png'

const Skills = () => {
    return (
        <>
            <article className={style.article}>
                <div className={style['skill-wrap']}>
                    <img src={articleImg} alt=""/>
                    <h4>Development skills</h4>
                    <p>I like to code while I am listening classical or other relaxing music and drinking hot green tea.</p>
                    <h5>Languages</h5>
                    <p>HTML, CSS, JavaScript</p>
                    <h5>Frameworks and Platforms</h5>
                    <p>NodeJS, Express, ReactJS, MongoDB, Mongoose</p>
                    <h5>Tools</h5>
                    <p>Command Line, NPM, Photoshop, Figma, VSCode, Pen and Paper</p>
                </div>
            </article>
        </>
    )
}

export default Skills