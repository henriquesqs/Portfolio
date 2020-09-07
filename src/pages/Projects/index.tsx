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
                    <div id="firstCard" onClick={(event) => { handleProjectCardClick("1", event) }}>
                        <ProjectCard focused={isFirstCardFocused} title="TÍTULO" longDescription="firstLongText" smallDescription="firstSmallText" image={proffyTemplate} githubLink="https://github.com" liveLink="#" />
                    </div>
                }

                {/* Second project card */}
                {(isFirstCardFocused || isThirdCardFocused) ? null :
                    <div id="secondCard" onClick={(event) => { handleProjectCardClick("2", event) }}>
                        <ProjectCard focused={isSecondCardFocused} title="TÍTULO" longDescription="secondLongText" smallDescription="secondSmallText" image={proffyTemplate} githubLink="#" />
                    </div>
                }

                {/* Third project card */}
                {(isFirstCardFocused || isSecondCardFocused) ? null :
                    <div id="thirdCard" onClick={(event) => { handleProjectCardClick("3", event) }}>
                        <ProjectCard focused={isThirdCardFocused} title="TÍTULO" longDescription="thirdLongText" smallDescription="thirdSmallText" image={proffyTemplate} />
                    </div>
                }
            </div>

        </div >
    );
}

export default Projects;