import React from "react";
import SocialCard from "../../components/SocialCard";

import "./styles.css";

const Contact = () => {
    return (
        <div className="contact" style={{height: window.innerHeight.toString()+'px'}}>
            <div className="topTexts">
                <h1 className="pageTitle">GET IN TOUCH</h1>
                <h3 className="pageSubTitle">
                    You can reach me on my<br />social medias
                </h3>                
            </div>
            <div className="socialMedias">
                    <SocialCard 
                        username="henriquesqs"
                        link="https://github.com/henriquesqs"
                        image="https://i.imgur.com/BMBn5e2.png"
                    />
                    <SocialCard 
                        username="henriquesqs"
                        link="https://www.linkedin.com/in/henriquesqs/"
                        image="https://i.imgur.com/yXP1W60.png"
                    />                
            </div>
        </div>
    );
}

export default Contact;