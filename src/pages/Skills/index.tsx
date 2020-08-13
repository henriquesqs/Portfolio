import React from "react";
import "./styles.css"
import Card from "../../components/Cards";

const Skills = () => {
    return (
        <div className="skills">

            <h1 className="pageTitle">WHAT I DO</h1>
            <h2 className="pageSubTitle">See what I can do for you</h2>
            {/* <hr className="line" /> */}

            <Card
                title="SOFTWARE DEVELOPMENT"

                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id aliquam mi. Vestibulum vestibulum lobortis nibh a sodales. Ut sed tortor vel massa condimentum porttitor vel sit amet purus. Curabitur nulla leo, vestibulum sed interdum quis, accumsan in tellus. Suspendisse potenti."

                iconName="desktop"
                iconStyle="fas"
            />

            {/* <Card title="SOFTWARE DEVELOPMENT" content="fuerihiefurhferihferiuhfirhiufehuife" iconName="palette" iconStyle="fas" />

            <Card title="SOFTWARE DEVELOPMENT" content="fuerihiefurhferihferiuhfirhiufehuife" iconName="chart-bar" iconStyle="far" /> */}
        </div>
    )
}

export default Skills;