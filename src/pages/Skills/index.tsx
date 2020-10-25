import React from "react";
import Card from "../../components/Card";
import Carousel from 'react-bootstrap/Carousel'

import "./styles.css"

const Skills = () => {

    return (
        <div className="skills">

            <div className="topTexts">
                <h1 className="pageTitle">WHAT I DO</h1>
                <h3 className="pageSubTitle">See what I can do for you</h3>
            </div>
            {/* <hr className="line" /> */}

            <Carousel slide={false} interval={10000} controls={false} bsPrefix="carousel" className="carousel">
                <Carousel.Item>
                    <Card
                        title="SOFTWARE DEVELOPMENT"

                        content="Low level development with C/C++ (3 years of experience). High level software development with Java and Python (1 year of experience). I am also able to work on full stack projects using HTML, CSS, JavaScript, React.js (with or without TypeScript) and Node.js."

                        iconName="desktop"

                        iconStyle="fas"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Card
                        title="WEB DESIGN"

                        content="I am starting to create projects mockups using Adobe XD and Figma and I am focusing to learn more about UI/UX development in order to create better projects mockups."

                        iconName="palette"
                        iconStyle="fas"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Card
                        title="OTHERS"
                        content="Linux, Git, MySQL, advanced English (speaking, writing and reading) and native Portuguese."
                        iconName="info-circle"
                        iconStyle="fas"
                    />
                </Carousel.Item>
            </Carousel>

            <div className="cards">
                <Card
                    title="WEB DESIGN"

                    content="I am starting to create projects mockups using Adobe XD and Figma and I am focusing to learn more about UI/UX development in order to create better projects mockups."

                    iconName="palette"
                    iconStyle="fas"
                />
                <Card
                    title="SOFTWARE DEVELOPMENT"

                    content="Low level development with C/C++ (3 years of experience). High level software development with Java and Python (1 year of experience). I am also able to work on full stack projects using HTML, CSS, JavaScript, React.js (with or without TypeScript) and Node.js."

                    iconName="desktop"
                    iconStyle="fas"
                />
                <Card
                    title="OTHERS"

                    content="Linux, Git, MySQL, advanced English (speaking, writing and reading) and native Portuguese."

                    iconName="info-circle"
                    iconStyle="fas"
                />

            </div>

        </div>
    )
}

export default Skills;