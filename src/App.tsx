import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons' // imports all fas icons
import { far } from '@fortawesome/free-regular-svg-icons' // imports all far icons 
import { fab } from '@fortawesome/free-brands-svg-icons' // imports all fab icons 
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/global.css";

library.add(fas, far, fab) // this line adds fas, far and fab icons globally so we can use with any page

function App() {
    
    const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage"];

    return (
        <ReactFullpage

            // fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            anchors={anchors}
            scrollingSpeed={1000}
            verticalCentered={false}
            render={({ fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section" data-anchor="slide1">
                            <Home anchors={anchors} />
                        </div>
                        <div className="section" data-anchor="slide2">
                            <Skills />
                        </div>
                        <div className="section" data-anchor="slide3">
                            <Projects />
                        </div>
                        <div className="section" data-anchor="slide4">
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default App;
