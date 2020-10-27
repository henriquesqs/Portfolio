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
    return (
        <ReactFullpage

            // fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000}
            render={({ fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Home api={fullpageApi} />
                        </div>
                        <div className="section">
                            <Skills />
                        </div>
                        <div className="section">
                            <Projects />
                        </div>
                        <div className="section">
                            <Contact />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default App;
