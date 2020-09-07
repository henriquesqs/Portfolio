import React, { useState, SyntheticEvent } from "react";
import proffyTemplate from "../../assets/images/proffy.jpg"
import ProjectCard from "../../components/ProjectCard";

import "./styles.css"

const Projects = () => {

    // States to control wheter ProjectCards are focused or not
    const [isFirstCardFocused, setIsFirstCardFocused] = useState(false);
    const [isSecondCardFocused, setIsSecondCardFocused] = useState(false);
    const [isThirdCardFocused, setIsThirdCardFocused] = useState(false);

    // This method is responsible for handling click on ProjectCards.
    // When user clicks on a card, we increase this card size and hide the others.
    function handleProjectCardClick(id: string, event: SyntheticEvent) {

        if (id === "1")
            setIsFirstCardFocused(true)

        else if (id === "2")
            setIsSecondCardFocused(true)

        else
            setIsThirdCardFocused(true)

        event.stopPropagation()
    }

    function handleClickOutsideCard(event: SyntheticEvent) {
        setIsFirstCardFocused(false)
        setIsSecondCardFocused(false)
        setIsThirdCardFocused(false)
    }

    return (
        <div className="projects" onClick={handleClickOutsideCard}>
            <h1 className="pageTitle">PROJECTS</h1>
            <h3 className="pageSubTitle">Click on any card and check them</h3>

            <div className="buttons">
                {/* First project card */}
                {(isSecondCardFocused || isThirdCardFocused) ? null :
                    <button id="firstCard" onClick={(event) => { handleProjectCardClick("1", event) }}>
                        <ProjectCard focused={isFirstCardFocused} title="TÍTULO" longDescription="frefrefrferferfer" smallDescription="1erjliferjkfrlkrl1erjliferjkfrlkrl1erjliferjkfrlkrl1erjliferjkfrlkrl" image={proffyTemplate} githubLink="https://github.com" liveLink="#" />
                    </button>
                }

                {/* Second project card */}
                {(isFirstCardFocused || isThirdCardFocused) ? null :
                    <button id="secondCard" onClick={(event) => { handleProjectCardClick("2", event) }}>
                        <ProjectCard focused={isSecondCardFocused} title="TÍTULO" longDescription="frefrefrferferfer" smallDescription="2erjliferjkfrlkrl" image={proffyTemplate} githubLink="#" />
                    </button>
                }

                {/* Third project card */}
                {(isFirstCardFocused || isSecondCardFocused) ? null :
                    <button id="thirdCard" onClick={(event) => { handleProjectCardClick("3", event) }}>
                        <ProjectCard focused={isThirdCardFocused} title="TÍTULO" longDescription="frefrefrferferfer" smallDescription="3erjliferjkfrlkrl" image={proffyTemplate} />
                    </button>
                }
            </div>

        </div >
    );
}

export default Projects;