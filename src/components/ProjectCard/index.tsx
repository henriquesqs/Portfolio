import React from "react"

import "./styles.css"

export interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    focused: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {

    return (
        <div>
            {props.focused ?

                <div className="focus_projectCard">
                    <img src={props.image} alt="Project preview" />
                </div>
                :
                <div className="hover">
                    <div className="projectCard">
                        <div className="blackLayer">
                            <p className="projectTitle">{props.title}</p>
                            <p className="projectDescription">{props.description}</p>
                        </div>
                        <img src={props.image} alt="Project preview" />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectCard;