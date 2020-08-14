import React from "react"

import "./styles.css"
import { fullpageApi } from "@fullpage/react-fullpage";

interface propsTypes {
	link1: string;
	link2: string;
	link3: string;
	link4: string;
	api: fullpageApi;
}

const Navbar: React.FC<propsTypes> = (props) => {
	return (
		<div className="navBar">
			<strong>
				<p>{props.link1 ? props.link1 : null}</p>
			</strong>
			<p onClick={() => (props.api).moveTo(2)}>{props.link2 ? props.link2 : null}</p>
			<p onClick={() => (props.api).moveTo(3)}>{props.link3 ? props.link3 : null}</p>
			<p onClick={() => (props.api).moveTo(4)}>{props.link4 ? props.link4 : null}</p>
		</div>
	);
}

export default Navbar
