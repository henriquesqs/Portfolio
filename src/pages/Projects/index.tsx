import React, { useState } from "react";
import proffyTemplate from "../../assets/images/proffy.jpg"
import ProjectCard from "../../components/ProjectCard";

import "./styles.css"

const Projects = () => {

    // States to control wheter ProjectCards are focused or not
    const [isFirstCardFocused, setIsFirstCardFocused] = useState(false);
    const [isSecondCardFocused, setIsSecondCardFocused] = useState(false);
    const [isThirdCardFocused, setIsThirdCardFocused] = useState(false);

    // This method is responsible for handling click on ProjectCards.
    // When user clicks on a card, we increase this card size and hide the others
    function handleProjectCardClick(id: string) {

        if (id === "1") {
            setIsFirstCardFocused(!isFirstCardFocused)
        }
        else if (id === "2") {
            setIsSecondCardFocused(!isSecondCardFocused)
        }
        else {
            setIsThirdCardFocused(!isThirdCardFocused)
        }
    }

    return (
        <div className="projects">
            <h1 className="pageTitle">PROJECTS</h1>
            <h3 className="pageSubTitle">Click on any card and check them</h3>

            <div onClick={() => handleProjectCardClick("1")}>
                {(isSecondCardFocused || isThirdCardFocused) ? null : <ProjectCard focused={isFirstCardFocused} title="TÍTULO" description="1erjliferjkfrlkrl1erjliferjkfrlkrl1erjliferjkfrlkrl1erjliferjkfrlkrl" image={proffyTemplate} />}
            </div>
            <div onClick={() => handleProjectCardClick("2")}>
                {(isFirstCardFocused || isThirdCardFocused) ? null : <ProjectCard focused={isSecondCardFocused} title="TÍTULO" description="2erjliferjkfrlkrl" image={proffyTemplate} />}
            </div>
            <div onClick={() => handleProjectCardClick("3")}>
                {(isFirstCardFocused || isSecondCardFocused) ? null : <ProjectCard focused={isThirdCardFocused} title="TÍTULO" description="3erjliferjkfrlkrl" image={proffyTemplate} />}
            </div>

        </div >
    );
}

export default Projects;