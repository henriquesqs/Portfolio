import React from "react"

import "./styles.css"

export interface ProjectCardProps {
    title: string;
    smallDescription: string;
    longDescription: string;
    image: string;
    focused: boolean;
    githubLink?: string;
    liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {

    return (
        <div id="card">
            {props.focused ?
                <div className="focus_projectCard">
                    <img src={props.image} className="img-fluid" alt="Project preview" />
                    <div className="texts">
                        <p className="projectTitle">{props.title}</p>
                        <p className="projectDescription">{props.longDescription}</p>
                    </div>
                    <div className="cardBottom">
                        <hr className="textsDivider" />
                        <div className="linksArea">
                            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
                                <p>VIEW ON GITHUB</p></a>
                            {props.liveLink ?
                                <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                                    <p>LIVE DEMO</p>
                                </a>
                                : null}
                        </div>
                    </div>
                </div>
                :
                <div className="hover">
                    <div className="projectCard">
                        <div className="blackLayer">
                            <div className="texts">
                                <p className="projectTitle">{props.title}</p>
                                <p className="projectDescription">{props.smallDescription}</p>
                            </div>
                        </div>
                        <img src={props.image} alt="Project preview" />
                    </div>
                </div>
            }
        </div >
    )
}

export default ProjectCard;