import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { IconPrefix } from "@fortawesome/fontawesome-svg-core";

import "./styles.css"

interface PropsTypes {
    title: string;
    content: string;
    iconName: IconName;
    iconStyle: IconPrefix;
}

const Card: React.FC<PropsTypes> = (props) => {

    return (
        <div className="card">
            <FontAwesomeIcon size="3x" icon={[props.iconStyle, props.iconName]} />
            <p className="title">{props.title}</p>
            <p className="content">{props.content}</p>
        </div>
    );
}

export default Card;