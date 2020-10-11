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

    // This function is responsible for handling click outside ProjectCards.
    // When user clicks outside it, we decrease its size
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
                        <ProjectCard
                            focused={isFirstCardFocused}
                            title="Proffy"
                            longDescription="Project made during a course provided by a brazilian company. We've created this to practice the basics of a full stack applcation development with React.js, TypeScript and Node.js."
                            smallDescription="Project created to learn React.js + TypeScript and Node.js"
                            image={proffyTemplate}
                            githubLink="https://github.com/henriquesqs/rocketseat-nlw2"
                            liveLink="https://henriquesqs.github.io/rocketseat-nlw2/#"
                        />
                    </div>
                }

                {/* Second project card */}
                {(isFirstCardFocused || isThirdCardFocused) ? null :
                    <div id="secondCard" onClick={(event) => { handleProjectCardClick("2", event) }}>
                        <ProjectCard
                            focused={isSecondCardFocused}
                            title="TÍTULO"
                            longDescription="secondLongText"
                            smallDescription="secondSmallText"
                            image={proffyTemplate}
                            githubLink="#"
                        />
                    </div>
                }

                {/* Third project card */}
                {(isFirstCardFocused || isSecondCardFocused) ? null :
                    <div id="thirdCard" onClick={(event) => { handleProjectCardClick("3", event) }}>
                        <ProjectCard
                            focused={isThirdCardFocused}
                            title="Portfolio"
                            longDescription="I've created this portfolio to better introduce my front-end development skills and also to improve my abilites using React.js with TypeScript."
                            smallDescription="This portfolio, made with React.js TypeScript"
                            image={'https://i.imgur.com/P39pnqn.jpg'}
                            githubLink="https://github.com/henriquesqs/portfolio"
                        />
                    </div>
                }
            </div>

        </div >
    );
}

export default Projects;