import React from "react";
import "./assets/styles/global.css";
import Index from "./pages/Index";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client

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
                            <Index />
                        </div>
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default App;
