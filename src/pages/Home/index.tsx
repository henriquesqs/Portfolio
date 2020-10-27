/* eslint-disable no-restricted-globals */
import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";
import { fullpageApi } from "@fullpage/react-fullpage";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg"

import "./styles.css";

interface propsTypes {
    api: fullpageApi;
}

const Home: React.FC<propsTypes> = (props) => {

    const links = []; // array containing links to my pages

    links.push(
        {
            id: 1,
            title: "HOME"
        },
        {
            id: 2,
            title: "SKILLS"
        },
        {
            id: 3,
            title: "PROJECTS"
        },
        {
            id: 4,
            title: "CONTACT"
        },
    );

    return (
        <div className="index" style={{height: window.innerHeight}}>

            {/* Creating my navbar and giving its items/links via its props */}
            <div className="navbar-area">
                <Navbar api={props.api} links={links} />
            </div>

            <div className="top-texts">
                <div className="main-text">Hello! I am</div>
                <div className="authors-name">HENRIQUE</div>
            </div>

            <div className="sub-text">
                a computer science student and lover of web development, web design and lofi music.
            </div>

            <img className="authors-image" src={ProfilePhoto} alt="Profile" />

            {/* Creating a button to download my CV */}
            <div className="button">
                {/* <a href="https://drive.google.com/uc?id=1HDzUCiHRhQnDUX9og3vXAspzB6VsBiHr&export=download"> */}
                <a href="/">
                    <Button bgColor="white" textColor="black" borderColor="black" hoverTextColor="#3672A6" hoverBorderColor="#3672A6" btnWidth="163px" btnHeight="50px" textSize="16px">DOWNLOAD CV</Button>
                </a>
            </div>

            <p className="scroll-text">Scroll down</p>
        </div >
    )
}

export default Home;