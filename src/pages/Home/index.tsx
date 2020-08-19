import React from "react";
// import Navbar from "../../components/Navbar";
import { Button } from "../../components/Button";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg"

import "./styles.css";

const Home = () => {
    return (
        <div className="index">

            {/* Creating my navbar and giving its items/links via its props */}
            {/* <Navbar link1="HOME" link2="SKILLS" link3="PROJECTS" link4="CONTACT" /> */}

            <div className="main-text"> Hello! I am </div>
            <div className="authorName">HENRIQUE</div>
            <div className="sub-text">
                a computer science student and lover of web development, web design and lofi music.
            </div>

            <img className="image" src={ProfilePhoto} alt="Profile" />

            {/* Creating a button to download my CV */}
            <a className="downloadCV" href="./docs/CV.pdf" download>
                <Button bgColor="white" textColor="black" borderColor="black" hoverTextColor="#3672A6" hoverBorderColor="#3672A6" btnWidth="163px" btnHeight="50px" >DOWNLOAD CV</Button>
            </a>

            <p className="scroll">Scroll down</p>
        </div >
    )
}

export default Home;