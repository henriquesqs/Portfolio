import React from "react"

import "./styles.css"

export interface SocialCardProps {
    username: string;
    image?: string;
    link: string;
}

const SocialCard: React.FC<SocialCardProps> = (props) => {

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div id="card">
                <div className="hover">
                    <div className="socialCard">
                        <div className="blackLayer">
                            <div className="texts">
                                <p className="username">{props.username}</p>
                            </div>
                        </div>
                        <img src={props.image} alt="Social network preview" />
                    </div>
                </div>
            </div >
        </a>
    )
}

export default SocialCard;