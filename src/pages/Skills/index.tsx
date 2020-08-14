import React from "react";
import Card from "../../components/Cards";
import Carousel from 'react-bootstrap/Carousel'

import "./styles.css"

const Skills = () => {

    return (
        <div className="skills">

            <h1 className="pageTitle">WHAT I DO</h1>
            <h3 className="pageSubTitle">See what I can do for you</h3>
            <hr className="line" />

            <Carousel slide={false} interval={10000} controls={false}>
                <Carousel.Item>
                    <Card
                        title="SOFTWARE DEVELOPMENT"

                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu purus, tincidunt ac justo quis, ultricies gravida enim. Integer ut tincidunt mi. Aliquam tristique orci vitae massa sollicitudin mattis ut in nisi. Donec sed augue posuere, congue felis a, tempor tortor. Vestibulum ut ex tortor."

                        iconName="desktop"
                        iconStyle="fas"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Card
                        title="SOFTWARE DEVELOPMENT"

                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu purus, tincidunt ac justo quis, ultricies gravida enim. Integer ut tincidunt mi. Aliquam tristique orci vitae massa sollicitudin mattis ut in nisi. Donec sed augue posuere, congue felis a, tempor tortor. Vestibulum ut ex tortor."

                        iconName="palette"
                        iconStyle="fas"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Card
                        title="SOFTWARE DEVELOPMENT"

                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu purus, tincidunt ac justo quis, ultricies gravida enim. Integer ut tincidunt mi. Aliquam tristique orci vitae massa sollicitudin mattis ut in nisi. Donec sed augue posuere, congue felis a, tempor tortor. Vestibulum ut ex tortor."

                        iconName="chart-bar"
                        iconStyle="far"
                    />
                </Carousel.Item>
            </Carousel>

        </div>

    )
}

export default Skills;