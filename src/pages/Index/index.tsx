import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import ProfilePhoto from "../../assets/images/ProfilePhoto.jpg"

const Index = () => {
    return (
        <div>

            {/* Creating my navbar and given its items/links by its props */}
            <Navbar link1="HOME" link2="SKILLS" link3="PROJECTS" link4="CONTACT"></Navbar>

            <p className="main-text"> Hello! I am </p>

            <p className="authorName">HENRIQUE</p>

            <p className="sub-text">
                a computer science student and lover of web development, web design and lofi music.
            </p>

            <img className="ProfilePhoto" src={ProfilePhoto} alt="Profile" />


        </div>
    )
}

export default Index;