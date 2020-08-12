import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg"
import scrollIcon from "../../assets/images/Arrow.svg"

const Index = () => {
    return (
        <div className="index">

            {/* Creating my navbar and giving its items/links via its props */}
            <Navbar link1="HOME" link2="SKILLS" link3="PROJECTS" link4="CONTACT"></Navbar>

            <div className="texts">
                <p className="main-text"> Hello! I am </p>
                <p className="authorName">HENRIQUE</p>
                <p className="sub-text">
                    a computer science student and lover of web development, web design and lofi music.
                </p>
            </div>

            <img className="ProfilePhoto" src={ProfilePhoto} alt="Profile" />
            <img className="scrollIcon" src={scrollIcon} alt="Arrow icon" />

        </div>
    )
}

export default Index;