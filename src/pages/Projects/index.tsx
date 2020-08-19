import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import proffyTemplate from "../../assets/images/proffy.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from "../../components/Button";

import "./styles.css"

const Projects = () => {

    const style = {
        backgroundImage: "url(" + proffyTemplate + ")"
    }

    return (
        <div className="projects">
            <Carousel controls={false} interval={100000} bsPrefix="carousel" className="carouselProjects">
                <Carousel.Item bsPrefix="carousel-item" className="carousel-item">
                    <div className="projectTemplate" style={style} />
                    <div className="projectDescription">
                        <h1 className="projectTitle">PROJETO</h1>
                        <p className="projectContent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor dapibus nisl a porta. Duis ultrices, mi vel tristique blandit, quam urna tristique ante, sed hendrerit erat magna eu mi. Maecenas quis mollis augue. Pellentesque eget diam a eros scelerisque elementum sed sed metus.
                        </p>
                        <p className="buttonsLabel">Check this project below</p>
                        <div className="buttonsArea">
                            <a className="projectGithubButton" href="." >
                                <Button bgColor="transparent" textColor="#F1F1F1" borderColor="#F1F1F1" hoverTextColor="#F2CF8D" hoverBorderColor="#F2CF8D" btnWidth="130px" btnHeight="50px" >
                                    <FontAwesomeIcon className="githubIcon" icon={["fab", "github"]} />
                                    GITHUB
                                </Button>
                            </a>
                            <a className="projectLiveButton" href="." >
                                <Button bgColor="transparent" textColor="#F1F1F1" borderColor="#F1F1F1" hoverTextColor="#F2CF8D" hoverBorderColor="#F2CF8D" btnWidth="130px" btnHeight="50px" >
                                    <FontAwesomeIcon className="liveIcon" icon="external-link-alt" />
                                    LIVE SITE
                                </Button>
                            </a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="projectTemplate" style={style} />
                    <div className="projectDescription">

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="projectTemplate" style={style} />
                    <div className="projectDescription">

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Projects;