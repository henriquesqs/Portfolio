import React from "react"
import { Button } from "../Button";

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
                    <img src={props.image} alt="Project preview" />
                    <div className="texts">
                        <p className="projectTitle">{props.title}</p>
                        <p className="projectDescription">{props.longDescription}</p>
                    </div>
                    <div className="cardBottom">
                        <hr className="textsDivider" />
                        <div className="buttonsArea">
                            {props.githubLink ? <Button bgColor="white" textColor="black" borderColor="black" hoverTextColor="#3672A6" hoverBorderColor="#3672A6" btnWidth="45%" btnHeight="50px">GITHUB</Button> : null}

                            {props.liveLink ? <Button bgColor="white" textColor="black" borderColor="black" hoverTextColor="#3672A6" hoverBorderColor="#3672A6" btnWidth="45%" btnHeight="50px">LIVE DEMO</Button> : null}
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