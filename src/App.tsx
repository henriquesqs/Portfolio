import React from "react";
import Index from "./pages/Home";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import Skills from "./pages/Skills"

import "./assets/styles/global.css";

function App() {
    return (
        <ReactFullpage

            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */

            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                            <Index />
                        </div>
                        <div className="section">
                            <Skills />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default App;
